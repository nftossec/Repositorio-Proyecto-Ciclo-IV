import React from "react";
import "./home.css";
import cabin2 from "./cabin2.jpg";

function Home() {
  return (
    <div>
      <h1>BIENVENIDO A STAR ROOF</h1>;
      <p className="parrafo">
        <b>Somos expertos en alquiler de cabañas</b>
      </p>
      <div>
        <img src={cabin2} alt="cabin2" />
      </div>
    </div>
  );
}

export default Home;
