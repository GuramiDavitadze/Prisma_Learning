import express, { type Application } from "express";
import cors from 'cors'
import helmet from "helmet";
import { todosRoutes } from "./routes/todosRoutes.js";
import { checkSecretKey } from "./middlewares/todosMiddlewares.js";
const app:Application = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(checkSecretKey)
app.use('/api',todosRoutes)

export default app