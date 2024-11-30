import mongoose from "mongoose";
import { UserInterface } from "../types/user.types";


const userSchema = new mongoose.Schema<UserInterface>({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, { timestamps : true})



export const UserModel = mongoose.model<UserInterface>('User', userSchema)