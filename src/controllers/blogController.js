import Blogs from "../model/blog.js";
import errFunc from "../utils/err.js";
import duplication from "../utils/duplication.js";
class blogController {

    static async createBlog(req,res){
        let checkduplication='';
        const {title,content,image}=req.body;
        checkduplication=await duplication(Blogs,{title})
       try {
            if(!checkduplication){
            const nBlog=await Blogs.create({title,content,image})
            return res.status(201).json({
            message:"Successfully created",
            data:nBlog
            })
            }
            else{
                res.status(400).json({
                    message:'Already exists'
                })
            }
            
       } catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
       }
    }

    static async getblogs(req,res){
        const nBlog=await Blogs.find()
        
        try{
            res.status(200).json({
                data:nBlog
            })    
       } catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
       }
    }

    static async updateblog(req,res){
        try {
            const {id}=req.params
            const {title,content}=req.body
            const _id=id
            const updblog=await Blogs.findByIdAndUpdate({_id},{title,content}, { new: true })
            if(!updblog){
                return res.status(404).json({
                message:`User with id =${_id} doesn't exists`
                })      
            }
            else{
                return res.status(200).json({
                message:`Updated successfully`,
                data:updblog
            })
            }
        } 
        catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
        }
    }

    static async deleteBlog(req,res){
        try {
        const {id}=req.params
        const _id=id

        const delBlog=await Blogs.findByIdAndDelete(_id)
        cos
        if(delBlog){
            return res.status(200).json({
                message:`Deleted successfully`
            })
        }
        else{
            return res.status(400).json({
                message:`User not found`
            })
        }
        } catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
        }
    }

    static async getOne(req,res){
        try {
        const {id}=req.params
        const oneBlog=await Blogs.findOne({ _id: id });
        console.log(oneBlog)
        if(oneBlog){
            return res.status(200).json({
                data:oneBlog
            })
        }
        else{
            return res.status(404).json({
                message:`User not found`
            })
        }
        } catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
        }
    } 
 
}

export default blogController;