import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";
import axios from "axios";

let index = async (req, res) => {
  const { method } = req;

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
      let response = res.status(500).json({ message: "Internal Server Error" });
	  return response;
      console.log(error);
    }
  }

  if (method === "GET") {
    try {
      const tasks = await Task.find();
      res.status(200).json({ data: tasks });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }
};
export default index;