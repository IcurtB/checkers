export function genereteObj(name: string, result?: 0 | 1) {
  return (index: number, enabled: boolean) => {
    const figure = index % 2 === result ?? 0 ? "white" : "black";
    return {
      figure,
      enabled,
      name: `${name}${index}`,
    };
  };
}

export function CheckersObj(letter: string, enabled: boolean, ){
  const name = (index: number) => `${letter}${index}`;
  const white = enabled ? "white" : "black";
  const black = enabled ? "black" : "white";
  return {
    [name(1)]: {
      figure: white,
      name: name(1),
      enabled,
    },
    [name(2)]: {
      figure: black,
      name: name(2),
      enabled: !enabled,
    },
    [name(3)]: {
      figure: white,
      name: name(3),
      enabled,
    },
    [name(4)]: {
      figure: black,
      name: name(4),
      enabled: !enabled,
    },
    [name(5)]: {
      figure: white,
      name: name(5),
      enabled,
    },
    [name(6)]: {
      figure: black,
      name: name(6),
      enabled: !enabled,
    },
    [name(7)]: {
      figure: white,
      name: name(7),
      enabled,
    },
    [name(8)]: {
      figure: black,
      name: name(8),
      enabled: !enabled,
    },
  };
}
