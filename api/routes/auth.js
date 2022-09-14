import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Helo this is auth endpoint")
})
export default router