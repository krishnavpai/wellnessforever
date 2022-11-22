import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import AiFillDelete from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// require ('dotenv').config();


// const url = "http://localhost:3000/api/task";s


const url = process.env.NEXT_PUBLIC_API_TASK;
// console.log(url)




export default function  taskPage(props) {
	const [tasks, setTasks] = useState(props.tasks);
	const [task, setTask] = useState({ task: "" });

	const handleChange = ({ currentTarget: input }) => {
		input.value === ""
			? setTask({ task: "" })
			: setTask((prev) => ({ ...prev, task: input.value }));
			
	};

	const addTask = async (e) => {
		e.preventDefault();
		try {
			if (task._id) {
				const { data } = await axios.put(`${url}` + "/" + task._id, {
					task: task.task,
				});

				// const {data} = await fetch(	url + "/" + task._id, {
				// 	method: "PUT",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 	},
				// 	body: JSON.stringify({
				// 		task: task.task,
				// 	}),
				// });


				const originalTasks = [...tasks];
				const index = originalTasks.findIndex((t) => t._id === task._id);
				originalTasks[index] = data.data;
				setTasks(originalTasks);
				setTask({ task: "" });
				console.log(data.message);
				
			} else {
			
				const { data } = await axios.post(url, task);

				// const {data} = await fetch("/api/task", {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 	},
				// 	body: JSON.stringify(task),
				// });

		
				
				console.log(data);
				setTasks((prev) => [...prev, data.data]);
				setTask({ task: "" });
				console.log(data.message);
			}
			toast.success("Added Task", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
		} catch (error) {
			console.log(error);
		}
	};

	const editTask = (id) => {
		const currentTask = tasks.filter((task) => task._id === id);
		setTask(currentTask[0]);
	};

	const updateTask = async (id) => {
		try {
			const originalTasks = [...tasks];
			const index = originalTasks.findIndex((t) => t._id === id);
			const { data } = await axios.put(url + "/" + id, {
				completed: !originalTasks[index].completed,
			});
			originalTasks[index] = data.data;
			setTasks(originalTasks);
			console.log(data.message);
			toast.success("Updated", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTask = async (id) => {
		try {
			const { data } = await axios.delete(url + "/" + id);
			// const {data} = await fetch("/api/task" + "/" + id, {
			// 	method: "DELETE",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// });

			setTasks((prev) => prev.filter((task) => task._id !== id));
			console.log(data.message);
			toast.warning("Deleted task", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
		} catch (error) {
			toast.error("response.error", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				});
			console.log(error);
		}
	};

	return (<>
		<ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
		<main className="md:mx-auto md:w-1/2 pt-20 	mx-2">
			<h1 className="text-3xl text-white mb-8">Reminders and Tasks</h1>
			<div className="">
				<form onSubmit={addTask} className={styles.form_container}>
					<input
						className={styles.input}
						type="text"
						placeholder="Task to be completed"
						onChange={handleChange}
						value={task.task}
					/>
					<button type="submit" className={styles.submit_btn}>
						{task._id ? "Update" : "Add"}
					</button>
				</form>
				{tasks.map((task) => (
					<div className={styles.task_container} key={task._id}>
						<input
							type="checkbox"
							className={styles.check_box}
							checked={task.completed}
							onChange={() => updateTask(task._id)}
						/>
						<p
							className={
								task.completed
									? styles.task_text + " " + styles.line_through
									: styles.task_text
							}
						>
							{task.task}
						</p>
						<button
							onClick={() => editTask(task._id)}
							className={styles.edit_task}
						>
							Edit
						</button>
						<button
							onClick={() => deleteTask(task._id)}
							className={styles.remove_task}
						>
							&#10006;
						</button>
					</div>
				))}
				{tasks.length === 0 && <h2 className={styles.no_tasks}>No tasks</h2>}
			</div>
		</main>
		</>
	);
}

export const getServerSideProps = async () => {

	const { data } = await axios.get(process.env.NEXT_PUBLIC_API_TASK);
	return {
		props: {
			tasks: data.data,
		},
	};
};