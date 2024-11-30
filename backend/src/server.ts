require('dotenv').config()
import express from 'express'
import { userRouter } from './routes/user.routes'
import { contentRouter } from './routes/content.routes'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'



const app = express()
const port = process.env.PORT || 5000
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/content', contentRouter)

const connect = async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log('connecting done to md server');
        
    } catch (error) {
        console.log(`Error while connecting to Db : ${error}`);
        
    }
}


app.listen(port, () => {
    connect()
    console.log(`the app is running at http://localhost:${port}`);
})
