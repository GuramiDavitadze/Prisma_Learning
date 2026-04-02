import express from 'express'
import { createNewTodo, getAllData } from '../controllers/todosController.js'

const todosRoutes = express.Router()

todosRoutes.get("/",getAllData)
todosRoutes.post('/',createNewTodo)

export {todosRoutes}