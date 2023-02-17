import { Box } from "@mui/material";
import React from "react";
import { Chip } from "./chip";
interface CurentRowInterface {
  row: number[];
  withBlack?: boolean;
  withWhite?: boolean;
  rowId: number;
}
export const CurentRow = ({
  row,
  withBlack,
  withWhite,
  rowId,
}: CurentRowInterface) => {
  const cells = row.map((cell, idx) => (
    <Box key={idx} sx={[box, { background: cell ? "skyblue" : "white" }]}>
      {cell !== 0 && withWhite && (
        <Chip color="pink" figureIs="white" id={idx + 1} rowId={rowId} />
      )}
      {cell !== 0 && withBlack && (
        <Chip color="gray" figureIs="black" id={idx + 1} rowId={rowId} />
      )}
    </Box>
  ));
  return <>{cells}</>;
};
const box = {
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
