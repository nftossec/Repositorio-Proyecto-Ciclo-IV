import React from "react";
import Button from "./components/forms/Button";
import "./assets/global.css";
import Gap from "./components/Gap";
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      <h1>BIENVENIDO A LA APLICACION START ROOF</h1>
      <Gap>2rem</Gap>
      <Login></Login>
    </div>
  );
}
