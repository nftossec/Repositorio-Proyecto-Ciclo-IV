import React from "react";
import "./forms.css";

function alerta() {
  alert("Cualquier mensaje");
}

export default function Button(props) {
  const { children } = props;

  return (
    <button className="button" onClick={alerta}>
      {children}
    </button>
  );
}
