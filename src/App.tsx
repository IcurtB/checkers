import React from "react";
import { Box } from "@mui/material";
import { Desk, MatrixDesk } from "./components";

function App() {
  return (
    <Box sx={{ padding: "120px", margin: "0 auto", display: 'flex', justifyContent: 'space-around' }}>
      <Desk />
      <MatrixDesk />
    </Box>
  );
}

export default App;
