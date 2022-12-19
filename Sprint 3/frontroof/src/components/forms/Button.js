import React from "react";
import "./forms.css";

function alerta() {
  alert("Redireccionando");
}
export default function Button(props) {
  const { children, type, onClick } = props;

  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
