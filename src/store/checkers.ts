import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChipsModel, MatrixModels } from "src/models";

const even = [0, 1, 0, 1, 0, 1, 0, 1];
const odd = [1, 0, 1, 0, 1, 0, 1, 0];
interface InitialState {
  matrix: MatrixModels;
  id: string | number | null;
}
const matrix: MatrixModels = {
  row1: even,
  row2: odd,
  row3: even,
  row4: odd,
  row5: even,
  row6: odd,
  row7: even,
  row8: odd,
};
const initialState: InitialState = {
  id: null,
  matrix,
};

const checkers = createSlice({
  name: "checkers",
  initialState,
  reducers: {
    setChipId(state, { payload }: PayloadAction<ChipsModel>) {
      state.id = `${payload.figureIs}-${payload.color}-${payload.id}`;
    },
    changeMatrix() {
      // state.matrix[rowId][id] = 0;
    },
  },
});

export const { setChipId, changeMatrix } = checkers.actions;

export default checkers.reducer;
