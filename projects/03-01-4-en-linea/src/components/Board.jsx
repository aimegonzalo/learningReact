import { useState } from "react";
import { Square } from "./Square";
import { TURNS } from "../Constants";
import {
  checkWinner,
  checkEndGame,
  fillDownSquares,
} from "../Logic/checkGameStatus";
import { ResetButton } from "./ResetButton";
import { WinnerModal } from "./WinnerModal";
import confetti from "canvas-confetti";

export function Board() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS.red);

  const [winner, setWinner] = useState(null);

  // Actualizar el tablero
  const updateBoard = (index) => {
    // Si estan ocupadas las casillas o hay un ganador, no permite seguir
    if (board[index] || winner) return;

    // tablero para renderizar
    const newBoard = [...board];
    newBoard[index] = turn;
    fillDownSquares(newBoard, index);
    setBoard(newBoard);

    //Nuevo Turno
    const newTurn = turn === TURNS.red ? TURNS.Blue : TURNS.red;
    setTurn(newTurn);

    //chequear jugadas
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //significa empate
    }
  };

  return (
    <>
      <ResetButton
        setBoard={setBoard}
        setTurn={setTurn}
        setWinner={setWinner}
      />
      <div className="grid grid-cols-7 gap-0.5 p-30">
        {board.map((square, index) => {
          return (
            <Square updateBoard={updateBoard} key={index} index={index}>
              {square}
            </Square>
          );
        })}
      </div>
      <WinnerModal
        setBoard={setBoard}
        setTurn={setTurn}
        setWinner={setWinner}
        winner={winner}
      />
    </>
  );
}
