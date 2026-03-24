import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <span className="todo-text" onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>

      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Ta bort
      </button>
    </li>
  );
}

export default TodoItem;
