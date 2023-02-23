import { useAppDispatch, useAppSelector } from "src/hooks";
import { Box } from "@mui/material";
import { setChipId, changeMatrix } from "src/store/checkers";
import { ChipsModel, MatrixModels } from "src/models";
import React from "react";

export const Chip = ({
  color,
  id,
  figureIs,
  rowId,
}: Omit<ChipsModel, "id"> & { rowId: number; id: number }) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.check.id);
  const MATRIX = useAppSelector((state) => state.check.matrix);
  const ID = `${rowId}${id + 1}`;
  const getCurrentChip = () => {
    dispatch(setChipId({ color, id: ID, figureIs }));
    // dispatch(
    //   // changeMatrix({ id: id - 1, rowId: `row${rowId}` as keyof MatrixModels })
    // );
    console.log(MATRIX)
    // console.log("----");
    // console.log(id, MATRIX[`row${rowId + 1}` as keyof MatrixModels][id]);
    // console.log("----");
    // console.log(id, "/", MATRIX[`row${rowId + 1}` as keyof MatrixModels]);
  };
  return (
    <Box
      onClick={getCurrentChip}
      sx={[
        {
          border: 1,
          backgroundColor:
            current === `${figureIs}-${color}-${ID}` ? "red" : color,
          height: "80%",
          width: "80%",
          borderRadius: "100%",
        },
      ]}
    />
  );
};
