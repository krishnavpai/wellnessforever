const mongoose = require('mongoose');


const MedicineSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    times: { type: Number, required: true },
    price: { type: Number, required: true },
    
},
{timestamps: true});    
export default mongoose.models.Medicine || mongoose.model('Medicine', MedicineSchema);