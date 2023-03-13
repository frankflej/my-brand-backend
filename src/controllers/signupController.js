import User from "../model/User.js";
import errFunc from "../utils/err.js";
import bcrypt from 'bcrypt'

const signupController=async (req,res)=>{
    const {username,email,password,cpassword}= req.body
    const hpass=await bcrypt.hash(password,10)
    const hcpass=await bcrypt.hash(cpassword,10)
    try {
        const allUser= await User.find()
        if(allUser == ''){
            const newUser= await User.create({username,email,password:hpass,cpassword:hcpass,isAdmin:true})
            res.status(201).json({
                message:"Successfully created",
                data:newUser
            })
        }
        else{
            const newUser= await User.create({username,email,password:hpass,cpassword:hcpass,isAdmin:false})
            res.status(201).json({
                message:"Successfully created",
                data:newUser
            })
        }
    } catch (error) {
        if(error.code){
            if(error.code==11000){
                const msg='Email already exists'
                errFunc(res,msg,400)
            }
        }else{
            console.log(error)
            errFunc(res,error.message,400)
        }
    }
}
export default signupController;