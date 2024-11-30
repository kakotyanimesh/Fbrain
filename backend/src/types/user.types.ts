import { ObjectId } from "mongoose"

export interface UserInterface {
    username : string,
    email : string,
    password : string
}
 
export interface ContentType {
    title : string,
    link : string,
    types : string,
    tags : ObjectId[],
    userId : ObjectId,
}

export interface LinkInterface {
    hash : string,
    userId : ObjectId
}

export interface TagInterface {
    title : string
}

