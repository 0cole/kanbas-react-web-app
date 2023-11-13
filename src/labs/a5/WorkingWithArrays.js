import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
	const [errorMessage, setErrorMessage] = useState(null);
	const API = "http://localhost:4000/a5/todos";
	const [todo, setTodo] = useState({
		id: new Date().getTime(),
		title: "Learn NodeJS",
		due: "2021-09-09",
		description: "Create a NodeJS server with ExpressJS and various RESTful APIs",
		completed: false,
	});
	const [todos, setTodos] = useState([]);
	const fetchTodos = async () => {
		const response = await axios.get(API);
		setTodos(response.data);
	};

	const postTodo = async () => {
		const response = await axios.post(API, todo);
		setTodos([...todos, response.data]);
	};
	const fetchTodoById = async (id) => {
		const response = await axios.get(`${API}/${id}`);
		setTodo(response.data);
	};
	const createTodo = async () => {
		const response = await axios.get(`${API}/create`);
		setTodos(response.data);
	};
	const deleteTodo = async (todo) => {
		try {
			const response = await axios.delete(`${API}/${todo.id}`);
			setTodos(todos.filter((t) => t.id !== todo.id));
		} catch (error) {
			console.log(error);
			setErrorMessage(error.response.data.message);
		}
	};
	const updateTodo = async () => {
		try {
			const response = await axios.put(`${API}/${todo.id}`, todo);
			setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
			setTodo({});
		} catch (error) {
			console.log(error);
			setErrorMessage(error.response.data.message);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);
	return (
		<div>
			{errorMessage && <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>}
			<h2>Working with Arrays</h2>
			<button onClick={createTodo} className="btn btn-primary mb-2 w-100">
				Create Todo
			</button>
			<input value={todo.id} readOnly />
			<input
				onChange={(e) =>
					setTodo({
						...todo,
						title: e.target.value,
					})
				}
				value={todo.title}
				type="text"
			/>
			<textarea
				onChange={(e) => setTodo({ ...todo, description: e.target.value })}
				value={todo.description}
				type="text"
			/>
			<input
				onChange={(e) =>
					setTodo({
						...todo,
						due: e.target.value,
					})
				}
				value={todo.due}
				type="date"
			/>
			<label>
				<input
					onChange={(e) =>
						setTodo({
							...todo,
							completed: e.target.checked,
						})
					}
					value={todo.completed}
					type="checkbox"
				/>
				Completed
			</label>
			<button onClick={postTodo}>Post Todo</button>
			<button onClick={updateTodo}>Update Todo</button>
			<ul className="list-group">
				{todos.map((todo) => (
					<li key={todo.id} className="list-group-item">
						<button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end ms-2">
							Delete
						</button>
						<button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning me-2 float-end">
							Edit
						</button>{" "}
						{todo.title} - {todo.description} - Completed? {todo.completed.toString()}
					</li>
				))}
			</ul>
		</div>
	);
}
export default WorkingWithArrays;
