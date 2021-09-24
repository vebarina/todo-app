import '../styles/search-bar.css';

function SearchBar(props) {
	const { searchTodo  } = props;

	return (
		<input
			className="search-bar"
			type="text"
			placeholder="Search Todo..."
			onChange={e => searchTodo(e.currentTarget.value)}
		/>
	 );
}

export default SearchBar;