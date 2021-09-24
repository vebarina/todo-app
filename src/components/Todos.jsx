import Todo from './Todo';
import '../styles/todos.css';

function Todos(props) {
	const { todos, editTodo, deleteTodo } = props;

	return (
		<div className="todos">
				<h2>Here is a list of your todos</h2>
				{todos.map(todo => 
					<Todo
						key={todo.id}
						todo={todo}
						editTodo={editTodo}
						deleteTodo={deleteTodo}
					/>
				)}
		</div>
	 );
}

export default Todos;