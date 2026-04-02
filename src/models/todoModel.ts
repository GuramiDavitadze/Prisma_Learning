import {prisma} from '../config/prisma.js'
const todoModel ={
    getAllTodos:async()=>{
        const datas = await prisma.todo.findMany()
        console.log(datas)
    }
}
export{ todoModel}