import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home"
import Reservation from "./views/Reservation";
import Login from "./views/Login";
import "./assets/global.css";
import Register from "./views/Register";
import "../src/views/Home/home.css"



export default function App() {
  return (
    <div className="contenedor-menu" >
      <nav className="nav">
        <ul className="navegador"> 
         <Link className="text1" to="/">STAR ROOF</Link>
          <Link className="text" to="/">Home</Link>
          <Link className="text" to="/Reservation">Reservation</Link>
          <Link className="text" to="/Login">Login</Link>
          <Link className="text" to="/Register">Register</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/Reservation"
          element={<Reservation></Reservation>}
        ></Route>

        <Route path="/Login" element={<Login></Login>}></Route>
        
        <Route path="/Register" element={<Register></Register>}></Route>

        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}

