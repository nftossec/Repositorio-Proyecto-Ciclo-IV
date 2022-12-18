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
			name,
	        mail,
	        ID,
	        age,
	        password,
		})
	    });
		const data = await res.json();
		alert(data.message);

	    alert(res.message);
	  }
	

	  const [name, setName] = useState("");
	

	  const [mail, setMail] = useState("");
	

	  const [ID, setID] = useState("");
	

	  const [age, setAge] = useState("");
	

	  const [password, setPassword] = useState("");
	

	  return (
	

	    <form onSubmit={onSubmit}>
	      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
	

	      <h1>Register</h1>
	

	      <Gap>1rem</Gap>
	

	      <Input onChange={(v) => setName(v.target.value)}>Name</Input>
	      <Input onChange={(v) => setMail(v.target.value)}>Mail</Input>
	      <Input onChange={(v) => setID(v.target.value)}>Number ID</Input>
	      <Input onChange={(v) => setAge(v.target.value)}>Age</Input>
	      <Input type="password" onChange={(v) => setPassword(v.target.value)}>Password</Input>
	   
	      <Gap>1rem</Gap>
	

	      <Button type="submit">
	        <b>SIGN UP</b>
	      </Button>
	

	    </Card>
        </form>
	  );
	}