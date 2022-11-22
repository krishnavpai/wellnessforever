const mongoose = require('mongoose');

const InventoryItemsSchema = new mongoose.Schema({
    inventoryName: { type: String},
    inventoryQuantity: { type: String},
    inventoryExpiryDate: { type: String},
    inventoryDescription: { type: String },
    inventoryStatus: { type: String },
},
{timestamps: true});
mongoose.models = {};
export default mongoose.model('InventoryItems', InventoryItemsSchema);

