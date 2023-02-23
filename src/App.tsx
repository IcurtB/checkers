import { Box, Paper } from "@mui/material";
import { useRowA } from "./modules";
const teama = { color: "purple", enemies: ["f", "g", "h"] };
const teamb = { color: "blue", enemies: ["a", "b", "c"] };
function App() {
  const row_a = useRowA("a", teama);
  const row_b = useRowA("b", teama);
  const row_c = useRowA("c", teama);
  const row_d = useRowA("d", undefined);
  const row_e = useRowA("e", undefined);
  const row_f = useRowA("f", teamb);
  const row_g = useRowA("g", teamb);
  const row_h = useRowA("h", teamb);
  return (
    <Box
      sx={{
        padding: "120px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "640px",
          width: "640px",
        }}
      >
        {row_a}
        {row_b}
        {row_c}
        {row_d}
        {row_e}
        {row_f}
        {row_g}
        {row_h}
      </Paper>
    </Box>
  );
}
const names = (name: string) => [
  `${name}1`,
  `${name}2`,
  `${name}3`,
  `${name}4`,
  `${name}5`,
  `${name}6`,
  `${name}7`,
  `${name}8`,
];
export default App;
