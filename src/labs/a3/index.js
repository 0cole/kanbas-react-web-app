import Javascript from "./Javascript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItems from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

import { useSelector } from "react-redux";

function Assignment3() {
	const { todos } = useSelector((state) => state.todosReducer);
	return (
		<div>
			<ul className="list-group">
				{todos.map((todo) => (
					<li className="list-group-item" key={todo.id}>
						{todo.title}
					</li>
				))}
			</ul>
			<h1>Assignment 3</h1>
			<TodoList />
			<TodoItems />
			<ConditionalOutput />
			<Styles />
			<Classes />
			<PathParameters />
			<Javascript />
		</div>
	);
}

export default Assignment3;
