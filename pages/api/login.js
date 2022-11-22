import connectDB from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.email == user.email && req.body.password == user.password) {
        res.status(200).json({ success: true, message: "Login Successful" });
      } 
      else {
        res.status(400).json({ success:false, message: "Invalid Credentials" });
      }
    } 
    else {
      res.status(400).json({success:false,  message: "No User Found" });
    }
  }
  else {
    res.status(400).json({ success:false, message: "Bad Request" });
  }
};

export default connectDB(handler);
