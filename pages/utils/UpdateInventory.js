import connectDB from "../../middleware/mongoose";
import InventoryItems from "../../models/InventoryItems";

const UpdateInventory = async (req, res) => {
  if(req.inventoryName == ""){
    let resp = {
      success: fasle,
      message: "Bad request",
  }
  return resp;
}

  else{
    let resp = {
        success: true,
        message: "Inventory updated successfully",
        };
        return resp;
  }
}

export default UpdateInventory;
