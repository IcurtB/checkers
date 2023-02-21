import React from "react";
import { Box } from "@mui/material";
import { Desk, MatrixDesk } from "./components";
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { AppDispatch, RootState } from 'src/store'

function App() {
  const state = useAppSelector((state) => state.bigCheck)
  
  return (
    <Box sx={{ padding: "120px", margin: "0 auto", display: 'flex', justifyContent: 'space-around' }}>
      {/* <Desk />
      <MatrixDesk /> */}
    </Box>
  );
}

export default App;
