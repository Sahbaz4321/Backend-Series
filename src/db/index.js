import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js"


// const connectDB= async ()=>{
//     try{
//       const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`);


//     }
//     catch(error){
//         console.log("Mongodb connection Failed is : ",error);
//         process.exit(1);

//     }
// }



const connectDB=async ()=>{
  try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongo db connected at host ${connectionInstance.connection.host}`);
    console.log(`\n mongo db connected at host ${connectionInstance.connection.port}`);
    console.log(`\n mongo db connected at host ${connectionInstance.connection.name}`);
    console.log(`\n mongo db connected at host ${connectionInstance.connection.readyState}`);



  }
  catch(error){
    console.log(`Mongo d connection failed : ${error}`)
    process.exit(1);
  }
}
export default connectDB;