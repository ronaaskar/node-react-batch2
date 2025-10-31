import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

const thingsToDo = [
  "Belajar GIT & CLI",
  "Belajar HTML & CSS",
  "Belajar Javascript",
  "Belajar ReactJS Dasar",
  "Belajar ReactJS Advance"
];

function App() {
  return (
    <div className="app-container">
      <h1>Checklist Belajar React</h1>
      <img src="/checklist-image.png" alt="Checklist" className="header-image" />
      <div className="todo-list">
        {thingsToDo.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
