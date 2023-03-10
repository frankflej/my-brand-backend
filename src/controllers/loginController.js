import User from "../model/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const loginController = async (req,res)=>{
    const {email,password}=req.body
    try{
        const foundUser= await User.findOne({email}) 
        if(!foundUser){
           return res.status(401).json({
                message:'Incorrect email or password'
            })
        }
        else{
            const passCheck= await bcrypt.compare(password,foundUser.password)
            if(passCheck){
                const token= jwt.sign({isAdmin:foundUser.isAdmin, name:foundUser.username, email:foundUser.email} , process.env.secret , {expiresIn:'1d'} )
                // console.log(token)
                res.cookie("token",token,{
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 // 1 day
                })
                return res.status(200).json({ 
                    data:{
                    id:foundUser._id,
                    email:foundUser.email,
                    isAdmin:foundUser.isAdmin
                    },
                    token:token
                    
                })   
            }
            else{
                return res.status(401).json({
                    message:'Incorrect password here'

                })
            }
        }
        
    }
    catch(error){
        
        console.log(error)

    }
}

export default loginController