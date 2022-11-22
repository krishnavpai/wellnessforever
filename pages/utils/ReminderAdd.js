import connectDB from "../../middleware/mongoose";
import InventoryItems from "../../models/InventoryItems";


const ReminderAdd = async (req, res) => {
    
  let resp ={
    success: true,
    message: "Reminder added successfully"
  }
  return resp;
  } 

export default ReminderAdd;
