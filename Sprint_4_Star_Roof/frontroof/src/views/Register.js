import React,  { useState } from "react";
	import Card from "../components/utils/Card";
	import Input from "../components/forms/Input";
	import Gap from "../components/utils/Gap";
	import Button from "../components/forms/Button";

	import { API_URL } from "../services/api";

	export default function Register(){
	  
	    async function onSubmit(e) {
	    e.preventDefault();

	    const res = await fetch(API_URL + "/client",{
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
	  const [identificacion, setIdentificacion] = useState("");
	  const [password, setPassword] = useState("");
	  const [correo, setCorreo] = useState("");
	  const [edad, setEdad] = useState("");

	  return (
	    <form onSubmit={onSubmit}>
	      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
	      <h1 className="text-register" >Register</h1>
		  <Gap>2rem</Gap>
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
