import {prisma} from '../config/prisma.js'
import { type TodoDataTypeBasic } from '../types/DataTypes.js'
const todoModel ={
    getAllTodos:async()=>{
        const todos = await prisma.todo.findMany()
        console.log(todos)
    },
    createTodo:async (data:TodoDataTypeBasic)=>{
        const todo = await prisma.todo.create({
            data
        })
        return todo
    }
}
export{ todoModel}