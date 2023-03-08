import mongoose from "mongoose";
const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:4
    },
    content:{
        type:String,
        required:true,
        minLength:3
    },
    image:{
        type:String,
        required:true,
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})
const Blogs=mongoose.model("Blogs",blogSchema)
export default Blogs;