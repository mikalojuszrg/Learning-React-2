import { useState } from "react";
import "./App.css";

const mockTodos = [
  { id: 1, title: "Learn how to delete" },
  { id: 2, title: "Learn how to use inputs" },
];

function TodoApp() {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState("");

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setTodoText(value);
  };

  const handleAddTodo = () => {
    const title = todoText.trim();
    const alreadyExists = todos.some((todo) => todo.title === title);

    if (title && !alreadyExists) {
      const newTodo = { id: Date.now(), title: title };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoText("");
    }
  };

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <strong
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-button"
            >
              X
            </strong>
          </li>
        ))}
      </ul>
      <input value={todoText} type="text" onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <p>{todoText}</p>
    </div>
  );
}

export default TodoApp;
