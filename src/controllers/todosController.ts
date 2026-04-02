import  {type Request,type Response} from 'express'
import { todoModel } from '../models/todoModel.js'
const getAllData = async (req:Request,res:Response)=>{
    const data = await todoModel.getAllTodos()
    console.log(data)
    res.send({message:"You Get All Data"})
}

const createNewTodo = async(req:Request,res:Response)=>{
    const {name,description} = req.body
    const newTodo = await todoModel.createTodo({name,description})
    res.send({message:newTodo})
}

export {getAllData,createNewTodo}