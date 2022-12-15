import React from "react";
import "./forms.css";

function alerta() {
  alert("Se ha guardado correctamente");
}

export default function Button(props) {
  const { children, onClick, type } = props;

  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
