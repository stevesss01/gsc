import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

const VoterForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [voterID, setVoterID] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !voterID || !age) {
      alert("Please fill in all fields.");
      return;
    }
    onRegister({ name, voterID, age });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Voter Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Voter ID"
          value={voterID}
          onChange={(e) => setVoterID(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: "20px" }}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default VoterForm;
