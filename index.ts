import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config() 
const PORT = process.env.PORT||process.env.SERVER_PORT || 3008;

app.listen(PORT, () => {
  console.log("It's working");
});
