import { Square } from "./Square";
import { ResetButton } from "./ResetButton";

export function WinnerModal({ winner, setBoard, setTurn, setWinner }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <ResetButton
            setBoard={setBoard}
            setTurn={setTurn}
            setWinner={setWinner}
          />
        </footer>
      </div>
    </section>
  );
}
