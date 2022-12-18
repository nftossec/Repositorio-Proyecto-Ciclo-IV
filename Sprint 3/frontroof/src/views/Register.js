import React,  { useState } from "react";
	import Card from "../components/utils/Card";
	import Input from "../components/forms/Input";
	import Gap from "../components/utils/Gap";
	import Button from "../components/forms/Button";

	export default function Register(){
	  
	    async function onSubmit(e) {
	    e.preventDefault();

	    const res = await fetch("http://localhost:8080/client", {
	      method: "POST",
	      mode: "cors",
	      headers: {
	        "Content-Type": "application/json",
	    },
		body:JSON.stringify({
			cliente:{
				nombreCliente,
				identificacion,
				password,
				correo,
				edad,
				
			}
			
		})
	    });
		if(res.ok){
			const data = await res.json();
			alert(data.message);
		}
		
	  }

	  const [nombreCliente, setNombreCliente] = useState("");
	  const [identificacion, setIdentificacion] = useState("");
	  const [password, setPassword] = useState("");
	  const [correo, setCorreo] = useState("");
	  const [edad, setEdad] = useState("");

	  return (
	    <form onSubmit={onSubmit}>
	      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
	      <h1>Register</h1>
	      <Input onChange={(v) => setNombreCliente(v.target.value)}>Name</Input>
	      <Input onChange={(v) => setCorreo(v.target.value)}>Mail</Input>
	      <Input onChange={(v) => setIdentificacion(v.target.value)}>Number ID</Input>
	      <Input onChange={(v) => setEdad(v.target.value)}>Age</Input>
	      <Input type="password" onChange={(v) => setPassword(v.target.value)}>Password</Input>
	      <Button type="submit"><b>SIGN UP</b></Button>
		  </Card>
        </form>
	  );
	}
