import Blogs from "../model/blog.js";

const likeController= async(req,res)=>{
    const {id}=req.params
    const _id=id
    // console.log(_id)
    const {user}= req
    const like ={
        name: user.email,
    }
    // console.log(like)
    try {
        const blog= await Blogs.findById({_id})
        if(!blog){
            return res.status(200).json({
                message:"There is an error"
            })
        }
       if(!blog.likes.name.includes(like.name)){
        blog.likes.name.push(like.name)
        blog.save()
        // console.log(blog.likes)
        return res.status(200).json({
            message:'Like added',
            data:blog
        })
       }
       else{
           const likeremove=blog.likes.name.indexOf(like.name)
           console.log(likeremove)
        blog.likes.name.splice(likeremove,1)
        blog.save()
        console.log(blog.likes)
        return res.status(200).json({
            message:'Like removed',
            data:blog.likes
        })

       }
    } catch (error) {
        console.log(error.message)
    }
}
export default likeController