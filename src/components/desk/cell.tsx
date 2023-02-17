import { Box } from "@mui/system";
import React from "react";

interface CellInterface {
  color: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export const Cell = ({ color, children, onClick }: CellInterface) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        ...cell,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

const cell = {
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
