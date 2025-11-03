import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // pastikan file ini ada di folder: src/assets/

function App() {
  // Daftar tugas
  const thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance"
  ];

  return (
    <div className="container">
      {/* Logo */}
      <img src={logo} alt="Sanbercode" className="logo" />

      {/* Judul */}
      <h2>THINGS TO DO</h2>
      <p>During Bootcamp in Sanbercode</p>

      {/* List Checkbox */}
      <div className="todo-list">
        {thingsToDo.map((item, index) => (
          <label key={index} className="todo-item">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </div>

      {/* Tombol */}
      <button className="btn">SEND</button>
    </div>
  );
}

export default App;
