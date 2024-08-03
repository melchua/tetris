import React from "react";
import GridSquare from "./GridSquare";

export default function () {
  const columns = 10;
  const rows = 18;

  const grid = [];

  for (let i = 0; i < rows; i++) {
    grid.push([]);
    for (let j = 0; j < columns; j++) {
      grid[i].push(<GridSquare key={`${i}${j}`} color="1" />);
    }
  }

  return <div className="grid-board">{grid}</div>;
}
