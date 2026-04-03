import  {type Request,type Response} from 'express'
import { todoModel } from '../models/todoModel.js'
const getAllData = async (req:Request,res:Response)=>{
    const data = await todoModel.getAllTodos()
    res.status(200).send({data:data})
}

const getSingleTodo = async(req:Request,res:Response)=>{
    const {id} = req.params
    const todo = await todoModel.getSingleTodo(Number(id))
    if(!todo){
        return res.status(404).send({message:`Could not find todo by id: ${id}`})
    }
    res.status(200).send(todo)
}
const createNewTodo = async(req:Request,res:Response)=>{
    const {name,description} = req.body
    const newTodo = await todoModel.createTodo({name,description})
    res.send({message:newTodo})
}

export {getAllData,getSingleTodo,createNewTodo}