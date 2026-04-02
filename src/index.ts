import express, {
  type Request,
  type Response,
  type Application,
} from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const PORT = process.env.SERVER_PORT || 3008;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello" });
});
app.listen(PORT, () => {
  console.log("It's working");
});
