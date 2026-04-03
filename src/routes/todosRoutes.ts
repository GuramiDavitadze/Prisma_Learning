import express from "express";
import {
  createNewTodo,
  deleteTodo,
  getAllData,
  getSingleTodo,
  updateTodo,
} from "../controllers/todosController.js";
import { checkDataExist } from "../middlewares/todosMiddlewares.js";

const todosRoutes = express.Router();

todosRoutes.get("/", getAllData);
todosRoutes.get("/:id", getSingleTodo);
todosRoutes.post("/", checkDataExist, createNewTodo);
todosRoutes.patch("/:id", updateTodo);
todosRoutes.delete("/:id", deleteTodo);
export { todosRoutes };
