import React, { useState } from "react";
import Card from "../components/utils/Card";
import Input from "../components/forms/Input";
import Gap from "../components/utils/Gap";
import Button from "../components/forms/Button";
import {Link, link} from "react-router-dom";

export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/login", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        user,
        password
      },
    });
    if (res.ok){
    const data = await res.json();
    alert(data.message);
    }
  }
    

  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div>
    <form onSubmit={onSubmit}>
      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1 className="login-text" >Login</h1>
        <Gap>2rem</Gap>
        <Input  onChange={(v) => setUser(v.target.value)}>Name</Input>
        <Input type="password" onChange={(v) => setPassword(v.target.value)}>
          Password
        </Input>
        <Button type="submit">INGRESAR</Button>
      </Card>
    </form>
    <div className= "regis"><p>¿No tienen cuenta? <Link className="regis2" to= "/Register">Crear una cuenta</Link></p></div>
    </div>
  );
}
