import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { calculateWinner } from "./utils";

import MoveList from "./components/MoveList";
import Status from "./components/Status";
import Board from "./components/Board";

function Game(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    if (calculateWinner(newCurrent.squares) || newCurrent.squares[i]) {
      return;
    }
    const newSquares = newCurrent.squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";

    setHistory(newHistory.concat([{ squares: newSquares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <Status
          winner={calculateWinner(current.squares)}
          activePlayer={xIsNext ? "X" : "O"}
        />
        <MoveList history={history} onClick={(step) => jumpTo(step)} />
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
