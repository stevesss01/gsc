import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import VoterForm from "./components/VoterForm";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <VoterForm onRegister={(data) => console.log("Registered:", data)} />
    </ThemeProvider>
  );
};

export default App;
