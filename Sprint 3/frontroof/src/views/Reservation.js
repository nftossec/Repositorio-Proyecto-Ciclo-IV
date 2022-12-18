import React from "react";
import Card from "../components/utils/Card";
import Input from "../components/forms/Input";
import Gap from "../components/utils/Gap";
import Button from "../components/forms/Button";

export default function Reservation() {
  return (
    <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
      <h1>Reservations</h1>
      <Gap>1rem</Gap>
      <Input>Mail</Input>
      <Input>Name</Input>
      <Input>Date</Input>
      <Gap>1rem</Gap>
      <Button>
        <b>Go</b>
      </Button>
    </Card>
  );
}
