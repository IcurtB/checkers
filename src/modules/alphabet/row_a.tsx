import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { Cell, Letter, Letters } from "src/models";
import { useAppSelector } from "src/hooks";
export const useRowA = <T extends Letter>(
  letter: T,
  props: HaveOnRow | undefined
) => {
  const letterObject = useAppSelector((row) => row.checkers_cell[letter]);
  console.log(letterObject);
  const cells = Object.values(letterObject).map((cell: Cell<T>) => (
    <Box key={cell.cellName} sx={box(cell.cellColor)}>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {!cell.enabled && (
          <Box
            sx={{
              width: "80%",
              height: "80%",
              backgroundColor: "red",
              opacity: "0.7",
              zIndex: 1,
              borderRadius: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        <Typography
          sx={{
            zIndex: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          textTransform={"uppercase"}
          color={cell.cellColor === "skyblue" ? "white" : "black"}
          fontWeight={600}
        >
          {cell.cellName}
        </Typography>
      </Box>
    </Box>
  ));
  return cells;
};

const box = (bg: string): SxProps => ({
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: bg,
});

interface HaveOnRow {
  cellName?: Letters<Letter>;
  color: string;
  enemies: string[];
}
