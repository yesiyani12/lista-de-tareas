function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => toggleTodo(todo.id)}>
        ✓
      </button>

      <button onClick={() => deleteTodo(todo.id)}>
        ✕
      </button>
    </div>
  );
}

export default Todo;