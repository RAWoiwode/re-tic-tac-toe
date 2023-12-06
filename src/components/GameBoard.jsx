import React from "react";

const GameBoard = ({ onSquareSelect, board }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleClick = (row, col) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map((inner) => [...inner])];
  //     updatedGameBoard[row][col] = player;

  //     return updatedGameBoard;
  //   });

  //   onSquareSelect();
  // };

  // Derive state

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSquareSelect(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
