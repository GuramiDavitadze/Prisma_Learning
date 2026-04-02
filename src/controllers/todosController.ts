import  {type Request,type Response} from 'express'
import { todoModel } from '../models/todoModel.js'
const getAllData = async (req:Request,res:Response)=>{
    const data = await todoModel.getAllTodos()
    console.log(data)
    res.send({message:"You Get All Data"})
}

export {getAllData}