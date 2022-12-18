import React, { useState } from "react";
import Card from "../components/utils/Card";
import Input from "../components/forms/Input";
import Gap from "../components/utils/Gap";
import Button from "../components/forms/Button";

export default function Reservation() {
  	  
    async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/reservation", {
      method: "POST",
      mode: "cors",
      body:JSON.stringify({
      reservation:{
      nombreCliente,
      fechaInicio,
      fechaFinal,
      disponibilidad,
      categoria,
    }
    
  })
    });
  if(res.ok){
    const data = await res.json();
    alert(data.message);
  }
  
  }
  const [nombreCliente, setNombreCliente] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [categoria, setCategoria] = useState("");


  return (
    <form onSubmit={onSubmit}>
    <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
      <h1>Reservations</h1>
      <Gap>1rem</Gap>
      <Input onChange={(v) => setNombreCliente(v.target.value)}>Name</Input>
      <Input onChange={(v) => setFechaInicio(v.target.value)}>Fecha Inicio</Input>
      <Input onChange={(v) => setFechaFinal(v.target.value)}>Fecha Final</Input>
      <Input onChange={(v) => setDisponibilidad(v.target.value)}>Disponibilidd</Input>
      <Input onChange={(v) => setCategoria(v.target.value)}>Categoria</Input>
      <Gap>1rem</Gap>
      <Button type="submit"><b>ENVIAR</b></Button>
    </Card>
    </form>
  );
}
