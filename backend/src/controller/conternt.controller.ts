import { Request, Response } from "express"
import { ContentModel, LinkModel } from "../model/content.model"
import { Error } from "mongoose"
import { hashLink } from "../utils/randomhash"
import { UserModel } from "../model/user.model"

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

export const shareBrain = async(req : Request, res : Response) => {
    try {
        const share = req.body.share

        if(share){
            const existingLink = await LinkModel.findOne({
                // @ts-ignore
                userId : req.userId
            })

            if(existingLink){
                res.status(200).json({
                    hash : existingLink.hash
                })
                return
            }

            const linkAdd = hashLink(20)
            console.log(linkAdd);
            

            await LinkModel.create({
                hash : linkAdd,
                // @ts-ignore
                userId : req.userId,
            })

            res.status(200).json({
                linkAdd
            })
        } else {
            await LinkModel.deleteOne({
                // @ts-ignore
                userId : req.userId
            })
            res.json({
                msg : 'Link deleted successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            msg : `Error while generating sharable Link error : ${error}`
        })
    }
}


export const getBrain = async(req: Request, res : Response) => {
    try {
        const { shareLink } = req.params
    
        const linkData = await LinkModel.findOne({
            hash : shareLink
        }).populate('userId', 'username')
    
        if(!linkData){
            res.status(404).json({
                msg : 'Invalid Link'
            })
            return
        }
    
        const { userId } = linkData
    
        const content = await ContentModel.find({
            userId
        })
    
    
        res.status(200).json({
            content,
            username : userId
        })
    } catch (error) {
        res.status(500).json({
            msg : `error while sharing the brain error : ${error}`
        })
    }
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