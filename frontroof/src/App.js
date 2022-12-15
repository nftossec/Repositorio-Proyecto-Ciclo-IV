import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Reservation from "./views/Reservation";
import Login from "./views/login";

import "./assets/global.css";
//import Gap from "./components/utils/Gap";
//import Button from "./components/forms/Button";
//import Nav from "./components/ultis/Nav";

export default function App() {
  return (
    <div>
      <nav className="flex">
        <Link to="/">Home</Link>
        <Link to="/Reservation">Reservation</Link>
        <Link to="/Login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/Reservation"
          element={<Reservation></Reservation>}
        ></Route>

        <Route path="/Login" element={<Login></Login>}></Route>

        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}
