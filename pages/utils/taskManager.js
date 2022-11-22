import Task from "../../models/Task";
import dbConnect from "../../utils/dbConnect";

const TaskManager = async (req, res) => {
  const method = "POST";

  // Connect to database
  await dbConnect();

  // Create task
  if (method === "POST") {
    try {
      const newTask = await new Task(req.body).save();
      console.log(req);
      let response = res
        .status(201)
        .json({ data: newTask, message: "Task added successfully" });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
export default TaskManager;
