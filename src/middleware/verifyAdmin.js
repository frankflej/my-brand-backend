import jwt from 'jsonwebtoken'

const verifyAdmin=(req,res,next)=>{
    const autho=req.headers.authorization
    try {
        if(!autho){
            return res.status(400).json({
                message:"No token provided"
            })
        }
        else{
            const token= autho.split(' ')[1]
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