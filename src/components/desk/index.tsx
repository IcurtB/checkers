import React, { useState } from "react";
import { Paper } from "@mui/material";
import { Row } from "./row";

export const Desk = () => {
  const [current, setCurrent] = useState("");
  const getCurrent = (key: string) => setCurrent(key);
  const rows = createRow({ current, onClick: getCurrent });
  return (
    <Paper
      elevation={8}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "640px",
        width: "640px",
      }}
    >
      {rows}
    </Paper>
  );
};

interface CreateRow {
  current: string;
  onClick: (key: string) => void;
}

function createRow({ current, onClick }: CreateRow) {
  const rows: React.ReactNode[] = [];
  while (rows.length < 8) {
    rows.push(
      <Row
        n={rows.length}
        reverse={rows.length % 2 === 0}
        onClick={onClick}
        current={current}
        key={rows.length}
      />
    );
  }
  return rows;
}
