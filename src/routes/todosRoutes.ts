import express from 'express'
import { createNewTodo, getAllData, getSingleTodo } from '../controllers/todosController.js'
import { checkDataExist } from '../middlewares/todosMiddlewares.js'

const todosRoutes = express.Router()

todosRoutes.get("/",getAllData)
todosRoutes.get("/:id",getSingleTodo)
todosRoutes.post('/',checkDataExist ,createNewTodo)
export {todosRoutes}