import express, { type Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { todosRoutes } from "./routes/todosRoutes.js";
import { checkSecretKey } from "./middlewares/todosMiddlewares.js";
import { swaggerSpec } from "./config/swagger.js";
import swaggerUi from "swagger-ui-express";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api", checkSecretKey);
app.use("/api", todosRoutes);
app.use("/api-todos", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
