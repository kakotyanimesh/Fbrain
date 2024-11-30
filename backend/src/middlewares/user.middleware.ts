import { NextFunction, Request, Response } from "express";
import jwt, { decode, JwtPayload } from 'jsonwebtoken'


require('dotenv').config()

// export const auth = (req : Request, res: Response, next : NextFunction) => {
//         const accessToken = req.cookies.accessToken
//         const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string)
        
//         if(decoded){
//          // @ts-ignore
//             req.userId = decoded.id
//             next() 
//         } else {
//             res.status(403).json({
//                 msg : "you are not logged in"
//             })
//         }
    

    
// }


export const auth = (req: Request | any, res : Response, next : NextFunction) => {
    const accessToken = req.cookies.accessToken

    if(!accessToken) {
        res.status(403).json({
            msg : 'no access token'
        })
        return
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload
        
        if (decoded && typeof decoded !== "string") {
            req.userId = decoded.userId
            next()
        } else {
            res.status(403).json({
                msg : 'Invalid token'
            })
        }
    } catch (error) {
        res.status(500).json({
            msg : `something went wrong in authentication error : ${error}`
        })
    }
}