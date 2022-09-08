import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
const app = express()

dotenv.config()

const connect = async ()=>{



try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Mongo DB")
  } catch (error) {
    throw error;
  }
}; 
mongoose.connection.on("disconnected", ()=>{
    console.log("disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connected")
})

app.listen(8000, ()=>{
    connect()
    console.log("connected")
})