import { Router } from "express";
import connectDB from "../../middleware/mongoose";
import User from "../../models/User";



const handler = async (req, res) => {
    if(req.method === 'POST' ){
         console.log(req.body);
        let u =  new User(req.body);
    
        await u.save();
        res.status(200).json({success: true, message: "User Created"});
    }
    else{
        res.status(400).json({success:false, message: "Bad Request"});
    }

}

export default  connectDB(handler);
        