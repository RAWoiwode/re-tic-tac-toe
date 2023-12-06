import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSquareSelect }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleClick = (row, col) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map((inner) => [...inner])];
  //     updatedGameBoard[row][col] = player;

  //     return updatedGameBoard;
  //   });

  //   onSquareSelect();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSquareSelect}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
