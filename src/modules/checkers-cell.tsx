import { CheckersObj } from "src/helpers";
import { Box, Typography } from "@mui/material";
export const CheckersCell = ({
  name,
  have,
  enabled = false,
  onChangeSet,
  names,
  nextRow,
}: {
  name: string;
  enabled?: boolean;
  have: string;
  names: string[];
  onChangeSet?: (key: string) => void;
  nextRow: string[];
}) => {
  const a = CheckersObj(name, enabled);
  const cells = [];
  console.log();

  for (let i = 1; i !== 9; i++) {
    const letter = `${name}${i}`;
    const only_letter = have?.substring(0, 1);
    const letter_number = Number(have?.slice(1));
    const startsWithLetter = letter.startsWith(only_letter);
    cells.push(
      <Box
        key={letter}
        onClick={() => {
          if (!a[letter].enabled) {
            onChangeSet && onChangeSet(letter);
          }
        }}
        sx={[
          box,
          {
            backgroundColor:
              a[letter].figure === "black" ? "skyblue" : a[letter].figure,
          },
          {
            backgroundColor: nextRow.some((row) => row.startsWith(name))
              ? ""
              : "",
            // backgroundColor:
            //   (!startsWithLetter &&
            //     names[i - 1] === `${name}${letter_number + 1}`) ||
            //   (!startsWithLetter &&
            //     names[i - 1] === `${name}${letter_number - 1}`)
            //     ? "black!important"
            //     : "",
          },
        ]}
      >
        <Typography
          fontWeight={600}
          color={have && letter === have ? "red" : "black"}
          textTransform="uppercase"
        >
          {letter}
        </Typography>
      </Box>
    );
  }
  return <>{cells}</>;
};
const box = {
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

