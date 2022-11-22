import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

let taskSlug = async (req, res) => {
	const { method } = req;
	const { id } = req.query;

	// Connect to database
	await dbConnect();

	if (method === "PUT") {
		try {
			const result = await Task.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);

			let response = res.status(200).json({ data: result, message: "Task Updated Successfully" });
			return response;
		} catch (error) {
			let response = res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
			return response;
		}
	}

	if (method === "DELETE") {
		try {
			await Task.findByIdAndDelete(id);
			let response = res.status(200).json({ message: "Task Deleted Successfully" });
			return response;
		} catch (error) {
			let response = res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
			return response;
		}
	}
};
export default taskSlug;