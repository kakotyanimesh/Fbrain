import { Router } from "express";
import { createContent, deleteContent, shareBrain, getContent } from "../controller/conternt.controller";
import { auth } from "../middlewares/user.middleware";

export const contentRouter = Router()

contentRouter.post('/create', auth, createContent)
contentRouter.delete('/delete', auth, deleteContent)
contentRouter.get('/getcontent', auth, getContent)
contentRouter.post('/share', shareBrain)
// contentRouter.get('/:shareLink', brainShare)
