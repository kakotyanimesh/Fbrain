import { Request, Response } from "express"
import { ContentModel } from "../model/content.model"
import { Error } from "mongoose"

export const createContent = async(req: Request, res: Response) => {
    try {
        const {title, link, types} = req.body
// @ts-ignore
        const userId = req.userId

        // console.log(userId);

        await ContentModel.create({
            title,
            link,
            types,
            tags : [],
            userId    
        })
        
        res.status(200).json({
            msg : 'content added Successfully'
        })
    } catch (error ) {
        res.status(403).json({
            msg : `something went wrong error : ${error}`
        })
    }

    
    
}

export const shareBrain = () => {

}

export const deleteContent = async (req : Request, res : Response) => {
    try {
        const contentId = req.body.contentId
    
        const deleteResult = await ContentModel.deleteOne({
            _id : contentId,
            // @ts-ignore
            userId : req.userId
        })
        
        if(deleteResult.deletedCount === 0) res.status(404).json({msg : 'Content not found or not authorized to delete'}) 
            return

        res.status(200).json({
            msg : 'content deleted successfully'
        })
    } catch (error) {
        res.status(403).json({
            msg : `Error while deleting the content error : ${error}`
        })
    }
    
}

export const getContent = async(req: Request, res: Response) => {
    try {
        const content = await ContentModel.find({
            // @ts-ignore
            userId : req.userId
        }).populate('userId', 'username')

        res.status(200).json({
            content
        })
    } catch (error) {
        res.status(403).json({
            msg : `Error while fetching the data from server error : ${error}`
        })
    }
}