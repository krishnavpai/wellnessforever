const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    med:
    [{
        productID: { type: String, required: true },
        quantity: { type: Number, default:1, required: true },

}],
    address: { type: String, required: true },
    total: { type: Number, required: true },
    status: { type: String, default: "pending", required: true },
},
{timestamps: true});
mongoose.models = {};
export default mongoose.model('Order', OrderSchema);