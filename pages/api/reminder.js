import { duration } from "@material-ui/core";
import connectDB from "../../middleware/mongoose";
import Reminder from "../../models/Reminder";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      const { type, medicine, dosage, dateTime, frequency, duration, description,status} = req.body[i];
      let reminder = new Reminder({
        type: type,
        medicine: medicine,
        dosage:   dosage,
        dateTime:   dateTime,
        frequency: frequency,
        duration: duration,
        description: description,
        status: status,
      });
      await reminder.save();
    }
    res.json({ message: "Reminder added successfully" });
  } else {
    res.json({ error: "Bad request" });
  }
};
export default connectDB(handler);
