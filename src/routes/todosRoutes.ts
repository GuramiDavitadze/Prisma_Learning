import express from 'express'
import { getAllData } from '../controllers/todosController.js'

const todosRoutes = express.Router()

todosRoutes.get("/",getAllData)
export {todosRoutes}