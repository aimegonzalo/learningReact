// import { resetGame } from "../Logic/resetGame";
import { TURNS } from "../Constants";

export const ResetButton = ({ setBoard, setTurn, setWinner }) => {
  
  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(TURNS.red);
    setWinner(null);
  };

  return (
    <button onClick={resetGame} className="btn-primary">
      Reiniciar el juego
    </button>
  );
};
