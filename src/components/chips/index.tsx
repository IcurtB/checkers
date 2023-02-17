import { Box } from "@mui/material";
import React from "react";

interface ChipsInterface extends Partial<Roadmap> {
  black: boolean;
  current: string;
  id: string;
}
export const Chips = ({
  black,
  myplace = true,
  id,
  current,
}: ChipsInterface) => {
  if (!myplace) return null;
  return (
    <Box
      sx={{
        background: current === id ? "green" : black ? "red" : "blue",
        width: "90%",
        height: "90%",
        borderRadius: "100%",
      }}
    />
  );
};
