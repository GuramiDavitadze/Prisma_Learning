import express from 'express'
import { createNewTodo, getAllData } from '../controllers/todosController.js'
import { checkDataExist } from '../middlewares/todosMiddlewares.js'

const todosRoutes = express.Router()

todosRoutes.get("/",getAllData)
todosRoutes.post('/',checkDataExist ,createNewTodo)

export {todosRoutes}