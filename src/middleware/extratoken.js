import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const extractToken = async (req,res,next)=>{
    try {
        const token= req.headers.cookie.split('=')[1]
        if(!token){
            return res.status(401).json({message: "please first login"})
        }
        const user= jwt.verify(token,process.env.secret,{expiresIn:'1d'})
        if(user.isAdmin === true){
            return res.status(401).json({message: "you can't comment on this blog if you are an admin"})
        }
        req.user= user
        next()

    } catch (error) {
        console.log(error)
    }

}

export default extractToken