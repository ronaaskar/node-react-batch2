import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./CRUDAxios.css"
import CRUDAxios from "./pages/CRUDAxios";
import MainRotes from '.routes/mainRoutes';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <MainRoutes></MainRoutes>
    <CRUDAxios></CRUDAxios>
    </>
  )
}

export default App;
