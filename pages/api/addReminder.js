import connectDB from "../../middleware/mongoose";
import ReminderItems from "../../models/ReminderItems";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      const { reminderType, reminderName, reminderDose, reminderDateTime, reminderFrequency, reminderDuration,reminderDescription, reminderStatus } = req.body[i];
      let reminder = new ReminderItems({
        reminderType: reminderType,
        reminderName: reminderName,
        reminderDose: reminderDose,
        reminderDateTime: reminderDateTime,
        reminderFrequency: reminderFrequency,
        reminderDuration: reminderDuration,
        reminderDescription: reminderDescription,
        reminderStatus: reminderStatus,
      });
      await reminder.save();
    }
    res.json({ message: "Reminder added successfully" });
  } else {
    res.json({ error: "Bad request" });
  }
};
export default connectDB(handler);
