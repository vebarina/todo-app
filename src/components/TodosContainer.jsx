import SearchBar from './SearchBar';
import Todos from './Todos';
import TodoForm from './TodoForm';
import '../styles/todos-container.css';

function TodosContainer(props) {
	const { todos, addTodo, editTodo, deleteTodo, searchTodo } = props;

	return ( 
		<div className="todos-container">
			<SearchBar searchTodo={searchTodo} />
			<TodoForm 
				addTodo={addTodo}
			/>
			{todos.length ?
				<Todos 
					todos={todos}
					editTodo={editTodo}
					deleteTodo={deleteTodo}
				/>
				: <p className="no-todos">You don't have any incomplete todos!</p>
			}
		</div>
	 );
}

export default TodosContainer;