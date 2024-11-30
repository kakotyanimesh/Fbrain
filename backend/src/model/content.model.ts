import mongoose from "mongoose";
import { ContentType, LinkInterface, TagInterface } from "../types/user.types";

const contentTypeMongooseEnum = ['image', 'video', 'article', 'audio']
// the above is a enum from mongoose => client only send 4 types of TYPE of content

const contenSchema = new mongoose.Schema<ContentType>({
    title : {
        type : String,
        required : true,
    },
    link : {
        type : String,
        required : true
    },
    types : {
        type : String,
        enum : contentTypeMongooseEnum,
        required : true
    },
    tags : [{
        type : mongoose.Types.ObjectId,
        ref : 'Tag'
    }],
    userId : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }
})

const TagsSchema = new mongoose.Schema<TagInterface>({
    title : {
        type : String,
        required : true,
        unique : true
    }
})

// link schema to sent to another user my brain 

const LinkSchema = new mongoose.Schema<LinkInterface>({
    hash : {type : String, required : true},
    userId : {type : mongoose.Types.ObjectId, ref : 'User', required : true}
})


const ContentModel = mongoose.model('Content', contenSchema)
const TagModel = mongoose.model('Tag', TagsSchema)
const LinkModel = mongoose.model('Link', LinkSchema)

export {ContentModel, TagModel, LinkModel}


