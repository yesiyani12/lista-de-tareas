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
  <i className="bi bi-check"></i>
</button>

<button onClick={() => deleteTodo(todo.id)}>
  <i className="bi bi-trash"></i>
</button>
    </div>
  );
}

export default Todo;