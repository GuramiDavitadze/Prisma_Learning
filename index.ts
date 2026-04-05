import dotenv from "dotenv";
dotenv.config();

console.log("Step 1 - dotenv loaded");

import app from "./src/app.js";

console.log("Step 2 - app imported");

const PORT = process.env.PORT || 3008;

console.log("Step 3 - PORT:", PORT);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
