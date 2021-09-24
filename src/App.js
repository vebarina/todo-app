import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodosContainer from './components/TodosContainer';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos" || "[]")));
  const [searchQuery, setSearchQuery] = useState("");

  function addTodo(input) {
    const todo = {
      id: uuidv4(),
      text: input,
      isComplete: false,
    }

    const updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
  }

  function editTodo(todo) {
    const updatedTodos = todos.map(t => {
      if(t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    });

    setTodos(updatedTodos);
  }

  function deleteTodo(todo) {
    const updatedTodos = todos.filter(t => t.id !== todo.id);
    setTodos(updatedTodos);
  }

  function filterPredicate(query) {
    if(
      query.text.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
      return true;
    }
    return false;
  }

  const filteredTodos = (searchQuery === "") ? todos : todos.filter(filterPredicate);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <Header />
      <TodosContainer
        todos={filteredTodos}
        addTodo={addTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        searchTodo={setSearchQuery}
        value={searchQuery}
      />
    </div>

  );
}

export default App;
