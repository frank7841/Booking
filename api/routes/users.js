import express from "express";
import { deleteUser, getAlltUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//update
// router.get("/checkauthentication", verifyToken,(req, res, next)=>{
//     res.send("Hello User you are authenticated") 

// })

// router.get("/checkuser/:id", verifyUser,(req, res, next)=>{
//     res.send("Hello User you are authenticated and can delete your Account") 

// })

// router.get("/checkadmin/:id", verifyAdmin,(req, res, next)=>{
//     res.send("Hello Admin you are authenticated and can delete All Account") 

// })
router.put("/:id",verifyUser, updateUser)
//delete
router.delete("/:id",verifyUser, deleteUser)
   
//get
router.get("/:id",verifyUser,getUser)
//getAll
router.get("/",verifyAdmin, getAlltUsers)      



export default router