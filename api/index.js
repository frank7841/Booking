import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import authRooms from './routes/rooms.js'
import authHotels from './routes/hotels.js'
import authUsers from './routes/users.js' 
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

app.get("/", (req, res)=>{
  res.send("hello first request")
})

//middlewares

app.use("/api/auth", authRoute)
app.use("/api/users", authUsers)
app.use("/api/hotels", authHotels)
app.use("/api/rooms", authRooms)

app.listen(8000, ()=>{
    connect()
    console.log("connected")
})