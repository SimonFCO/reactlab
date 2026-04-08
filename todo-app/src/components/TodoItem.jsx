import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        ta bort
      </button>
    </li>
  );
}

export default TodoItem;
