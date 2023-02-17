import React from "react";
import { useState } from "react";
import { Chips } from "src/components";
import { Cell } from "./cell";

interface RowInterface {
  n: number;
  reverse?: boolean;
  current: string;
  onClick: (key: string) => void;
}
export const Row = ({ n, reverse, current, onClick }: RowInterface) => {
  const [road, setRoad] = useState<Omit<Roadmap, "myplace">>({
    bleft: 0,
    bright: 0,
    tleft: 0,
    tright: 0,
  });
  const cells: React.ReactNode[] = [];
  while (cells.length < 8) {
    const len = cells.length;
    const key = `${n}${len}`;
    if (len % 2 === (reverse ? 0 : 1)) {
      cells.push(<Cell key={key} color="white" />);
    } else {
      cells.push(
        <Cell
          key={key}
          color="skyblue"
          onClick={() => {
            onClick(key);
            // setRoad({bleft: });
          }}
        >
          {n === 3 || n === 4 ? null: (
            <Chips
              black={n < 4}
              id={key}
              current={current}
              myplace={!(key === current)}
              {...road}
            />
          )}
          {current === key && (
            <Chips black={n < 4} id={key} current={current} {...road} />
          )}
        </Cell>
      );
    }
  }
  return <>{cells}</>;
};
