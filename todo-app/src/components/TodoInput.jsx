import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValueLength = inputValue.length;
    if (inputValue.trim() !== "") {
      if (inputValueLength < 30) {
        addTodo(inputValue);
        setInputValue("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Skriv din note här NU?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default TodoInput;
