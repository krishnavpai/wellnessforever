import Medicine from "../../models/Medicine";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method === 'POST'){

        for(let i = 0; i < req.body.length; i++){
            const { title, slug, description, image, times, price } = req.body[i];
            let medicine = new Medicine({
                title: title,
                slug: slug,
                description: description,
                image: image,
                times: times,
                price: price,
  
            });
            await medicine.save();
            }
        res.json({message: "Medicines added successfully"});
    }
    else{
        res.json({error: "Bad request"});
    }
}
export default connectDB(handler);
