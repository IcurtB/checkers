export type Letter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type CheckerNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Letters<T extends Letter> = `${T}${CheckerNumber}`;
export type Cell<T extends Letter> = {
  myRowName: string;
  cellName: Letters<T>;
  enabled: boolean;
  cellColor: "white" | "skyblue";
};

export type Row<T extends Letter> = Record<Letters<T>, Cell<T>>;

export type Rows = {
  a: Row<"a">;
  b: Row<"b">;
  c: Row<"c">;
  d: Row<"d">;
  e: Row<"e">;
  f: Row<"f">;
  g: Row<"g">;
  h: Row<"h">;
};
