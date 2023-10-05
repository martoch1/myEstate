import express from "express"
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DATABASE).then(()=>{
  console.log('connected to database');   
}).catch((err) => {console.log(err);}
);
const PORT = 3000;

app.listen(PORT, ()=> {
    console.log('server is listening on port')
});
