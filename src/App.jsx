import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }

    if (filter === "incomplete") {
      return !todo.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <h1>Mis tareas</h1>
      <p>Para organizarme</p>

      <Form addTodo={addTodo} />

   <div className="filters">
     <i className="bi bi-funnel"></i>

  <select
    value={filter}
    onChange={(event) => setFilter(event.target.value)}
  >
    <option value="all">Todas</option>
    <option value="completed">Completadas</option>
    <option value="incomplete">Incompletas</option>
  </select>
</div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;