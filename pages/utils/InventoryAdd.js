import connectDB from "../../middleware/mongoose";
import InventoryItems from "../../models/InventoryItems";

const InventoryAdd = async (req, res) => {
  
    let resp = {
      success: false,
      message: "Inventory added successfully",
  }
  return resp;

}

export default InventoryAdd;
