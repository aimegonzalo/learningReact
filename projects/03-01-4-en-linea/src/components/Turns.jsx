import { Square } from "./Square";
import { TURNS } from "../Constants";
export const Turns = () => {
  return (
    <div className="flex flex-row gap-4">
      <Square>{TURNS.red}</Square>
      <Square>{TURNS.Blue}</Square>
    </div>
  );
};
