import { Router } from "express";
import { signIn, signUp } from "../controller/user.controller";


export const userRouter = Router()

userRouter.post('/signup', signUp)
userRouter.post('/signin', signIn)
// userRouter.post('/logOut', logOut)
