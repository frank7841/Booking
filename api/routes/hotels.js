import express, { response } from "express";
import { creatHotel, deleteHotel, getAlltHotels, getHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


//Create
router.post("/",verifyAdmin, creatHotel)

//update
router.put("/:id",verifyAdmin, updateHotel)
//delete
router.delete("/:id",verifyAdmin, deleteHotel)
   
//get
router.get("/:id",getHotel)
//getAll
router.get("/", getAlltHotels)      
    

export default router