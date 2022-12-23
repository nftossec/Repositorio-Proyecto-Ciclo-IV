import React, { useState } from "react";
import Card from "../components/utils/Card";
import Input from "../components/forms/Input";
import Gap from "../components/utils/Gap";
import Button from "../components/forms/Button";

export default function Reservation() {
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/Reservation", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reservation: {
          nombreCliente,
          fechaInicio,
          fechaFinal,
          disponibilidad,
          categoria,
        },
      }),
    })
      .then((res) => res.json())
      .then((dog) => console.log(dog));
  }
  fetch("mock.codes/500")
    .then(() => console.log("Todo bien"))
    .catch(() => console.log("Algo falló"));

  const [nombreCliente, setNombreCliente] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
          <h1 className="reservacion" >Haz tu reserva</h1>
          <Gap>2rem</Gap>
          <Input onChange={(v) => setNombreCliente(v.target.value)}>
            Nombres y Apellido
          </Input>
          <Input onChange={(v) => setFechaInicio(v.target.value)}>
            Fecha Ingreso
          </Input>
          <Input onChange={(v) => setFechaFinal(v.target.value)}>
            Fecha Salida
          </Input>
          <Input onChange={(v) => setDisponibilidad(v.target.value)}>
            Estado de la Reserva
          </Input>
          <Input onChange={(v) => setCategoria(v.target.value)}>
            Tipo de Cabaña
          </Input>
          <Button type="submit">RESERVAR</Button>
        </Card>
      </form>
    </div>
  );
}
