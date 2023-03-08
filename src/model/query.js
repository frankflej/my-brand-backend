import mongoose from 'mongoose'
const querySchema= new mongoose.Schema({
    clientname:{
        type:String,
        required:true,
    },
    clientemail:{
        type:String,
        required:true,
        unique:true
    },
    clientmessage:{
        type:String,
        required:true,
        
    }
})

const Query=mongoose.model("Query",querySchema)

export default Query;