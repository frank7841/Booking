import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.Access_token;

    if(!token){
        return next(createError(401, "You are not authenticated"))
    }
    jwt.verify(token, process.env.JWTKEY,(err, user)=>{
        if(err) return next(createError(403, "Token not valid"))
        req.user =user
        next()
    })
}
export const verifyUser =(req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id== req.params.id|| req.user.isAdmdin) {
            next()
        }
        else{
            return next(createError(403, "You are not Authorised"))

        }
    })
}
export const verifyAdmin =(req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.isAdmdin) {
            next()
        }
        else{
            return next(createError(403, "You are not Authorised Admin"))

        }
    })
}

