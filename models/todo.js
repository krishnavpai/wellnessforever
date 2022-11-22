import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide Reminder name"],
  },
  completed: {
    type: Boolean,
  },
});

export default mongoose.models.todo || mongoose.model("todo", todoSchema);