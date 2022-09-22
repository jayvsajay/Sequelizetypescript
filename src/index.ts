import express, {Request,Response,Application,ErrorRequestHandler, NextFunction} from'express'
import createHttpError from 'http-errors'
import {Server} from 'http'
import { config } from 'dotenv'
import { DeletUser, getAllUsers, getUserById, PostUserData, UpdateUser } from './controller/user.controller'

config()
const app:Application=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.post('/postdata', PostUserData)
app.get('/getdata',getAllUsers)
app.get('/singledata',getUserById)

app.put('/updatedata',UpdateUser)

app.delete('/deletedata' , DeletUser)
app.use((req:Request,res:Response,next:NextFunction)=>{
    next(new createHttpError.NotFound())
})

const errorHandler:ErrorRequestHandler = (err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        status:err.status || 500,
        message:err.message
    })

}

app.use(errorHandler)
const PORT:Number=Number(process.env.PORT) || 4000


const server:Server=app.listen(PORT,function(){
    console.log(`Working at ${PORT}`)
})