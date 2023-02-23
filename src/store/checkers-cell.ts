import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rows, Cell, Letter, Letters, CheckerNumber } from "src/models";

function returnRow<Input extends Letter>(
  myRowName: Input,
  n: CheckerNumber,
  reverse?: 1
): Cell<Input> {
  const cellName = `${myRowName}${n}` as Letters<Input>;
  const cellColor = n % 2 === (reverse ?? 0) ? "white" : "skyblue";
  const enabled = n % 2 === (reverse ?? 0) ? true : false;
  const output = { cellColor, cellName, enabled, myRowName } as Cell<Input>;
  return output;
}

const initialState: Rows = {
  a: {
    a1: returnRow("a", 1),
    a2: returnRow("a", 2),
    a3: returnRow("a", 3),
    a4: returnRow("a", 4),
    a5: returnRow("a", 5),
    a6: returnRow("a", 6),
    a7: returnRow("a", 7),
    a8: returnRow("a", 8),
  },
  b: {
    b1: returnRow("b", 1, 1),
    b2: returnRow("b", 2, 1),
    b3: returnRow("b", 3, 1),
    b4: returnRow("b", 4, 1),
    b5: returnRow("b", 5, 1),
    b6: returnRow("b", 6, 1),
    b7: returnRow("b", 7, 1),
    b8: returnRow("b", 8, 1),
  },
  c: {
    c1: returnRow("c", 1),
    c2: returnRow("c", 2),
    c3: returnRow("c", 3),
    c4: returnRow("c", 4),
    c5: returnRow("c", 5),
    c6: returnRow("c", 6),
    c7: returnRow("c", 7),
    c8: returnRow("c", 8),
  },
  d: {
    d1: returnRow("d", 1, 1),
    d2: returnRow("d", 2, 1),
    d3: returnRow("d", 3, 1),
    d4: returnRow("d", 4, 1),
    d5: returnRow("d", 5, 1),
    d6: returnRow("d", 6, 1),
    d7: returnRow("d", 7, 1),
    d8: returnRow("d", 8, 1),
  },
  e: {
    e1: returnRow("e", 1),
    e2: returnRow("e", 2),
    e3: returnRow("e", 3),
    e4: returnRow("e", 4),
    e5: returnRow("e", 5),
    e6: returnRow("e", 6),
    e7: returnRow("e", 7),
    e8: returnRow("e", 8),
  },
  f: {
    f1: returnRow("f", 1, 1),
    f2: returnRow("f", 2, 1),
    f3: returnRow("f", 3, 1),
    f4: returnRow("f", 4, 1),
    f5: returnRow("f", 5, 1),
    f6: returnRow("f", 6, 1),
    f7: returnRow("f", 7, 1),
    f8: returnRow("f", 8, 1),
  },
  g: {
    g1: returnRow("g", 1),
    g2: returnRow("g", 2),
    g3: returnRow("g", 3),
    g4: returnRow("g", 4),
    g5: returnRow("g", 5),
    g6: returnRow("g", 6),
    g7: returnRow("g", 7),
    g8: returnRow("g", 8),
  },
  h: {
    h1: returnRow("h", 1, 1),
    h2: returnRow("h", 2, 1),
    h3: returnRow("h", 3, 1),
    h4: returnRow("h", 4, 1),
    h5: returnRow("h", 5, 1),
    h6: returnRow("h", 6, 1),
    h7: returnRow("h", 7, 1),
    h8: returnRow("h", 8, 1),
  },
};

const checkersCell = createSlice({
  initialState,
  name: "checkersCell",
  reducers: {
    checkCells(state, payload: PayloadAction<Rows>) {
      console.log(state);
    },
  },
});

export const { checkCells } = checkersCell.actions;
export default checkersCell.reducer;
