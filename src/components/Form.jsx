import { useState } from "react";

function Form({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.trim() === "") {
      return;
    }

    addTodo(input);

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
  className="todo-input"
  type="text"
        placeholder="Escribe una tarea..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button className="add-button" type="submit">
  <i className="bi bi-plus-circle"></i> Agregar Tarea
</button>
    </form>
  );
}

export default Form;