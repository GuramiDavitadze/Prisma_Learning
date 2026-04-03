import {prisma} from '../config/prisma.js'
import { type TodoDataTypeBasic } from '../types/DataTypes.js'
type updateTodo ={
    name?:string,
    description?:string
}
const todoModel ={
    getAllTodos:async()=>{
        const todos = await prisma.todo.findMany({})
        return todos
    },
    getSingleTodo:async(id:number)=>{
        const todo = await prisma.todo.findUnique({
            where:{id:id}
        })
        return todo
    },
    createTodo:async (data:TodoDataTypeBasic)=>{
        const todo = await prisma.todo.create({
            data
        })
        return todo
    },
    updateTodo:async(id:number,data:updateTodo)=>{
        const updatedTodo = await prisma.todo.update({
            where:{id},
            data
        })
        return updatedTodo
    }
}
export{ todoModel}