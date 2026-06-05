import { generateWinnerCombos } from "./winnerCombos";

//funcion para ver si termino el juego
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

// funcion para ver si hay un ganador

export const checkWinner = (boardToCheck) => {
  const winnerCombos = generateWinnerCombos();

  //chequear todas las combinaciones
  for (const combo of winnerCombos) {
    const [a, b, c, d] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const fillDownSquares = (boardToCheck, index) => {
  // revisar si la casilla en la que estoy parado primero no sea null
  let i = index;
  while (i <= 34) {
    if (boardToCheck[i + 7] === null) {
      boardToCheck[i + 7] = boardToCheck[i];
      boardToCheck[i] = null;
    }
    i += 7;
  }
  return boardToCheck;
};
