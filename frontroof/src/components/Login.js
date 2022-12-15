import React, { useState } from "react";
import Card from "./Card";
import Input from "./forms/Input";
import Gap from "./Gap";
import Button from "./forms/Button";

export default function Login() {

  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/login",{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type": "application/json",
        user,
        password
      }
    })
    const jsonres = await res.json()
    alert(jsonres.message)
  }

  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1>Login</h1>
        <Gap>2rem</Gap>
        <Input onChange={(v) => setUser(v.target.value)}>Usuario</Input>
        <Gap>1rem</Gap>
        <Input type="password" onChange={(v) => setPassword(v.target.value)}>
          Contraseña
        </Input>
        <Gap>2rem</Gap>
        <Button type="submit">INGRESAR</Button>
      </Card>
    </form>
  );
}
