import jwt from 'jsonwebtoken'

const verifyAdmin=(req,res,next)=>{
    const token=req.headers.credentials
    // console.log(token)
    try {
        if(!token){
            return res.status(400).json({
                message:"No token provided"
            })
        }
        else{
            
            const verification=jwt.verify(token,process.env.secret,{expiresIn:'1d'})
            if(verification.isAdmin){
                    next()
            }else{
                return res.status(400).json({
                    message:"Not allowed"
                })
            }
        }
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}

export default verifyAdmin;