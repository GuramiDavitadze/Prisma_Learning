import { type Request, type Response } from "express";
import { todoModel } from "../models/todoModel.js";
const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await todoModel.getAllTodos();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.getSingleTodo(Number(id));
    if (!todo) {
      return res
        .status(404)
        .json({ message: `Could not find todo by id: ${id}` });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
const createNewTodo = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const newTodo = await todoModel.createTodo({ name, description });
  res.json({ message: newTodo });
};
const updateTodo = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;
    const data: { name?: string; description?: string } = {};
    if (name !== undefined) data.name = name;
    if (description !== undefined) data.description = description;
    const todo = await todoModel.updateTodo(Number(id), data);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.getSingleTodo(Number(id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    await todoModel.deleteTodo(Number(id));
    res.json({ message: `Todo with id ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { getAllData, getSingleTodo, createNewTodo, updateTodo, deleteTodo };
