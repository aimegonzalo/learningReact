import { generateWinnerCombos } from "./winnerCombos";

//funcion para ver si termino el juego
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

// funcion para ver si hay un ganador

export const checkWinner = (boardToCheck) => {
  const winnerCombos = generateWinnerCombos()
  
  //chequear todas las combinaciones
  for (const combo of winnerCombos) {
    const [a, b, c, d] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a]
    }
  }

  return null
}