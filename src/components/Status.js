import React from "react";

export default function Status({ winner, activePlayer }) {
  const status = winner ? `Winner: ${winner}` : `Next player: ${activePlayer}`;
  return <div className="status">{status}</div>;
}
