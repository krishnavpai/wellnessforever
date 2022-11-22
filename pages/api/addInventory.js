import connectDB from "../../middleware/mongoose";
import InventoryItems from "../../models/InventoryItems";


const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      const { inventoryName, inventoryQuantity, inventoryExpiryDate,inventoryDescription, inventoryStatus } = req.body[i];
      let inventory = new InventoryItems({
        inventoryName: inventoryName,
        inventoryQuantity: inventoryQuantity,
        inventoryExpiryDate: inventoryExpiryDate,
        inventoryDescription: inventoryDescription,
        inventoryStatus: inventoryStatus,
      });
      await inventory.save();
    }
    res.json({ success:true, message: "Inventory added successfully" });
  } else {
    res.json({ success:false ,message: "Bad request" });
  }
};
export default connectDB(handler);
