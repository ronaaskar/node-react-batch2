import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png"; // pastikan file ini ada di: src/assets/

function App() {
  const [time, setTime] = useState(new Date());
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  const thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance"
  ];

  return (
    <div className="container">
      <h2>Now At - {time.toLocaleTimeString("en-US", { hour12: false })}</h2>
      <p>Countdown : {countdown}</p>

      <div className="card">
        <img src={logo} alt="Sanbercode" className="logo" />

        <h3>THINGS TO DO</h3>
        <p>During Bootcamp in Sanbercode</p>

        <div className="todo-list">
          {thingsToDo.map((item, index) => (
            <label key={index} className="todo-item">
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>

        <button className="btn">SEND</button>
      </div>
    </div>
  );
}

export default App;
