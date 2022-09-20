import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import authRooms from './routes/rooms.js'
import authHotels from './routes/hotels.js'
import authUsers from './routes/users.js' 
import cookieParser from "cookie-parser";
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
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/users", authUsers)
app.use("/api/hotels", authHotels)
app.use("/api/rooms", authRooms)

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something Went Wrong"

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message:errorMessage,
    stack: err.stack
  })
  next()
})
app.listen(8800, ()=>{
    connect()
    console.log("connected")
})