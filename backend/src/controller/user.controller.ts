import { Request, Response } from "express"
import { signInObject, signUpObject } from "../utils/zod"
import { UserInterface } from "../types/user.types"
import { z } from "zod"
import { UserModel } from "../model/user.model"
import bcrypt from 'bcryptjs'
import mongoose from "mongoose"
import { generateAccessToken, generateRefreshToken } from "../utils/jwt"

export const signUp = async(req: Request, res: Response) : Promise<any> => {

    try {
        const parsedObject = signUpObject.parse(req.body)
        /*
            when we use parsed in zod it returns only success call (on success) or only error (on failure) 
            here on success => parsedObject is only contain the success things not the error & that's why we didnot write parsedObject.data as there is no such thing in .parse but in .safeparse there is object like parseObject.data
            the error is handled inside the catch block => as the error is instance of z.ZodError as ZodError is an object under z 
        */ 

        const { username, email, password } : UserInterface = parsedObject

        const hasedPassword = await bcrypt.hash(password, 10)
        // console.log(hasedPassword);
        
        await UserModel.create({
            username, 
            email,
            password : hasedPassword
        })

        res.status(200).json({
            msg : 'User created Successfully'
        })
        
    } catch (error) {
        if(error instanceof z.ZodError){
            res.status(403).json({
                msg : 'Invalid credentials',
                error : error.errors
            })
            return
            
            // we have to return null or something so that the server won't stopped
        }
        res.status(404).json({
            msg : `Error while creating the user ${error}`
        })
        
    }
}


export const signIn = async(req: Request, res : Response) : Promise<any> => {
    try {
        const parsedObject = signInObject.parse(req.body)
        const {email, password} = parsedObject

        const user = await UserModel.findOne({email})

        if(!user) return res.status(401).json({msg : 'user doesnot exits | invalid email or password'})

        const unhasedPassword = await bcrypt.compare(password, user.password)

        if(!unhasedPassword) return res.status(401).json({msg : 'invalid password or email | user doesnot exists'})

        const accessToken = generateAccessToken(user._id)
        const refreshtoken = generateRefreshToken(user._id)

        const options = {
            httpOnly : true,
            secure : true
        }
        
        res.status(200)
        .cookie('accessToken', accessToken, options)
        .cookie('refreshToken', refreshtoken, options)
        .json({
            msg : 'user logged In successfully',
            // accessToken,
            // refreshtoken
        }) 
    } catch (error) {
        if(error instanceof z.ZodError){
            res.status(403).json({
                msg: 'invalid credentials',
                error : error.errors
            })
            return
        }

        res.status(403).json({
            msg : `error while sign In error : ${error}`
        })
        
    }    
}