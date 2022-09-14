import express from "express";
import Hotels from "../models/Hotels";
const router = express.Router();


//Create
router.post("/", async(req,res)=>{
    const newHotel = new Hotels(req.body)
    
    try {
        
        
    } catch (error) {
        res.status(500).json(error)
    }
})
//update
//delete
//get
//getAll

export default router