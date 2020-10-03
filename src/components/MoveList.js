import React from "react";

export default function MoveList({ history, onClick }) {
  return (
    <ol>
      {history.map((step, move) => (
        <Move move={move} key={move} onClick={() => onClick(move)} />
      ))}
    </ol>
  );
}

function Move({ move, onClick }) {
  const description = move ? `Go to move #${move}` : "Go to game start";
  return (
    <li>
      <button onClick={onClick}>{description}</button>
    </li>
  );
}
