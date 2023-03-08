import query from '../model/query.js'
import errFunc from "../utils/err.js";

class queryController {

    static async createquery(req,res){
        const {clientname,clientemail,clientmessage} =req.body;
       try {
            const nquery=await query.create({clientname,clientemail,clientmessage})
            console.log(nquery)
            res.status(201).json({
                message:"New query posted",
                data:nquery
            })
       } catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
       }

    }

    static async getquery(req,res){
        const nquery=await query.find()
        
        try{
            res.status(200).json({
                data:nquery
            })    
       } catch (error) {
            const message=error.message;
            const status=400;
            errFunc(res,message,status)
       }
    }

   

   
 
}

export default queryController;