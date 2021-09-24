import { useState } from 'react';
import '../styles/todo-form.css';

function TodoForm(props) {
	const { addTodo } = props;
	const [input, setInput] = useState("");

	function handleSubmit(e) {	
		e.preventDefault();

		addTodo(input);
		setInput("");
	}

	function handleChange(e) {
		setInput(e.currentTarget.value);
	}

	return ( 
		<form onSubmit={handleSubmit}>
			<input
				className="todo-form"
				type="text"
				placeholder="+ Add Todo and press Enter"
				value={input}
				onChange={handleChange}
				maxLength="300"
			/>
		</form>
	 );
}

export default TodoForm;