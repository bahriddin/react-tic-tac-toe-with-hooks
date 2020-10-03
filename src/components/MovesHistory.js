import React from "react";

export default function MovesHistory({ history, onClick }) {
  return (
    <ol>
      {history.map((step, move) => (
        <Step move={move} key={move} onClick={() => onClick(move)} />
      ))}
    </ol>
  );
}

function Step({ move, onClick }) {
  const description = move ? `Go to move #${move}` : "Go to game start";
  return (
    <li>
      <button onClick={onClick}>{description}</button>
    </li>
  );
}
