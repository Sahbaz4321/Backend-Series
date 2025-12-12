import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import {app} from './app.js';

import connectDB from "./db/index.js";
// require("dotenv").config();


dotenv.config({
    path:'./env'
})


const db=connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);

        mongoose.connection.on("error",(err)=>{
    console.log("Mongodb connected error detected : ",err);

    
// Server chal raha tha, beech me MongoDB crash ho gaya	.on("error")
            
        })
    })
})

.catch((err)=>{
    console.log("MongoDB connection failed !!!",err);
})


// Server start ke time MongoDB down	.catch()
 





/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error is ", error);
      throw error 
    });
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);

    })
  } catch (error) {
    console.log(error);
    throw error;
  }
})();

*/
