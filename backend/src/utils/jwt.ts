// ṭwo function for generate acces token and refreshtoken with username 

import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'
require('dotenv').config()

export const generateAccessToken = (userId : Types.ObjectId) : string => {
    return jwt.sign({
        userId
    }, process.env.ACCESS_TOKEN_SECRET as string, 
    {expiresIn : process.env.ACCESS_TOKEN_EXPIRY} 
)}

export const generateRefreshToken = (userId : Types.ObjectId) : string => {
    return jwt.sign({
        userId
    }, process.env.REFRESH_TOKEN_SECRET as string, 
    {expiresIn : process.env.REFRESH_TOKEN_EXPIRY})
}



