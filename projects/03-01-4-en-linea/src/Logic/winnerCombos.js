const ROWS = 6;
const COLUMNS = 7;

export const generateWinnerCombos = () => {
  const combos = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      const index = row * COLUMNS + col;

      // Lógica horizontal 
      if (col <= COLUMNS - 4) {
        combos.push([index, index + 1, index + 2, index + 3]);
      }

      // Lógica vertical 
      if (row <= ROWS - 4) {
        combos.push([
          index,
          index + COLUMNS,
          index + COLUMNS * 2,
          index + COLUMNS * 3,
        ]);
      }

      // Lógica diagonal abajo a la derecha
      if (row <= ROWS - 4 && col <= COLUMNS - 4) {
        combos.push([
          index,
          index + COLUMNS + 1,
          index + (COLUMNS + 1) * 2,
          index + (COLUMNS + 1) * 3,
        ]);
      }

      // Lógica diagonal abajo a la izquierda
      if (row <= ROWS - 4 && col >= 3) {
        combos.push([
          index,
          index + COLUMNS - 1,
          index + (COLUMNS - 1) * 2,
          index + (COLUMNS - 1) * 3,
        ]);
      }
    }
  }

  return combos;
};
