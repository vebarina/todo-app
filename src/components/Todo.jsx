import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/todo.css';

function Todo(props) {
	const { editTodo, deleteTodo } = props;
	const [todo, setTodo] = useState(props.todo);

	function handleClick() {
		const updatedTodo = {
			...todo,
			isComplete: !todo.isComplete,
		}

		setTodo(updatedTodo);
		editTodo(updatedTodo);
	}

	function handleChange(event) {
		const value = event.target.value;
		const updatedTodo = {
			...todo,
			text: value,
		}

		editTodo(updatedTodo);
	}
	
	return ( 
		<div className="todo">
				<input type="checkbox" id="checkbox" />
			<div className="todo-area">
				<div 
					className={"custom-checkbox " + (todo.isComplete ? "checked" : "")}
					onClick={() => handleClick()}
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faCheck} className={"checkmark " + (todo.isComplete ? "" : "hidden")} />
				</div>
				<label>
					<input 
						type="text"
						className={"todo-text " + (todo.isComplete ? "complete" : "")}
						defaultValue={todo.text}
						maxLength="300"
						onInput={handleChange}
					/>
				<hr className="division" />
				</label>
			</div>
			<div className="delete">
				<FontAwesomeIcon 
					icon={faTrashAlt} 
					className="delete-icon"
					onClick={() => deleteTodo(todo)}
					tabIndex={0}
				/>
			</div>
		</div>
	 );
}

export default Todo;