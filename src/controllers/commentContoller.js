
import Blogs from '../model/blog.js';
const commentController= async (req,res)=>{
    try {
            const {message}=req.body
            const {id}=req.params
            console.log(id)
            // console.log(id)
            const {user}= req
            const comment ={
                name: user.name,
                message
            }
            const blog= await Blogs.findOne({_id: id})
            blog.comment.push(comment)
            blog.save()
            console.log(blog)
            return res.status(200).json({status:200, blog})
        }
        catch (error) {
            console.log(error.message)
        }
    }




export default commentController