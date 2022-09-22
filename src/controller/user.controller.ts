import { UserModel } from "../model/UserSchema";
import { Request,Response } from "express";

export const PostUserData = async(req:Request,res:Response)=>{
    try{
  const resp:any = await UserModel.create(req.body)
    console.log(resp)
    res.send(resp)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}
export const getAllUsers = async(req:Request,res:Response)=>{
    try{
        
        const resp:any = await UserModel.findAll({})
        res.send(resp)
    }
    catch(err){
        res.send(err)
    }
}
export const getUserById = async(req:Request,res:Response)=>{
    try{
    const resp = await UserModel.findOne({where:{id:req.body.id}})
    res.send(resp)
    }
    catch(err)
    {
        res.send(err)
    }
}

export const UpdateUser = async(req:Request,res:Response) => {
    try { 
         const result = await UserModel.update({name:req.body.name},{where:{id:req.body.id}})
         res.send("Updated Successfull")
    }
    catch(err) { 
        res.send(err)
    }
}
export const DeletUser =  async(req:Request,res:Response) => {
    try { 
        const result = await UserModel.destroy({where:{id:req.body.id}})
        res.send("Deleted Successfull")
    }
    catch(err){
        res.send(err)
    }
}