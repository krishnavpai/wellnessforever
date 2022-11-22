import Medicine from "../../models/Medicine";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method === 'GET'){
        const medicines = await Medicine.find();
        res.json(medicines);
    }
    else{
        res.json({error: "Bad request"});
    }

   
      
         
}
export default connectDB(handler);
