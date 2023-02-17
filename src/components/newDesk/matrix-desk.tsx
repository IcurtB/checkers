import { Paper } from "@mui/material";
import React from "react";
import { useAppSelector } from "src/hooks";
import { CurentRow } from "./curent-row";

export const MatrixDesk = () => {
  const matrix = useAppSelector((state) => state.check.matrix);
  // const even = [0, 1, 0, 1, 0, 1, 0, 1];
  // const odd = [1, 0, 1, 0, 1, 0, 1, 0];
  // const matrix = {
  //   row1: even,
  //   row2: odd,
  //   row3: even,
  //   row4: odd,
  //   row5: even,
  //   row6: odd,
  //   row7: even,
  //   row8: odd,
  // };
  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "640px",
        width: "640px",
      }}
    >
      <CurentRow row={matrix.row1} withBlack rowId={1} />
      <CurentRow row={matrix.row2} withBlack rowId={2} />
      <CurentRow row={matrix.row3} withBlack rowId={3} />
      <CurentRow row={matrix.row4} rowId={4} />
      <CurentRow row={matrix.row5} rowId={5} />
      <CurentRow row={matrix.row6} withWhite rowId={6} />
      <CurentRow row={matrix.row7} withWhite rowId={7} />
      <CurentRow row={matrix.row8} withWhite rowId={8} />
    </Paper>
  );
};
