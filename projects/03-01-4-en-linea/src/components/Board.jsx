import { useState } from "react";
import { Square } from "./Square";
import {TURNS, WINNER_COMBOS} from "../Constants"

export function Board() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS.red)
  
  return(
    <div className="grid grid-cols-7 gap-0.5 p-30">{
        board.map((_,index) =>{
            return(
                <Square key={index}/>
            );
        })
}</div>
    )    
}
