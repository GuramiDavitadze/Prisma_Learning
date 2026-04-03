import {prisma} from '../config/prisma.js'
import { type TodoDataTypeBasic } from '../types/DataTypes.js'
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
    }
}
export{ todoModel}