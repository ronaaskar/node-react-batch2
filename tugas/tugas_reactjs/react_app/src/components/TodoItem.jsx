import React from "react";
import "./TodoItem.css"; // opsional, jika mau styling terpisah

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" id={todo} />
      <label htmlFor={todo}>{todo}</label>
    </div>
  );
};

export default TodoItem;
