import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3008;

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to start:", error);
  process.exit(1);
}
