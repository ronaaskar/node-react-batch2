import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/welcome";

function App() {
  const [count, setCount] = useState(0);
  let people = (
    {name: john, Job : Programmer, color:green}
    {name: Doe, Job: Driver, color:blue}
    {name: Sarah, Job: Artist, color:yellow}
    {name:Rizal, Job: Gammer, color:blue}
  
  )
  
  {people.map(function(item, index))
  return (
    <>
      <Welcome name ="John"color="blue"/> 
      <Welcome name ="Doe"color="red"/> 
      <Welcome name ="Richard"color="black"/> 
    </>
  )};


export default App;
