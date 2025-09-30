import React, { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import MoveList from './components/MoveList';
import { calculateWinner } from './lib/game';


export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const winner = calculateWinner(currentSquares);

  function handleSquareClick(index) {
    if (winner || currentSquares[index]) return;

    const nextSquares = currentSquares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Status winner={winner} xIsNext={xIsNext} />
        <Board squares={currentSquares} onSquareClick={handleSquareClick} />
        <div className="controls">
          <button className="btn" onClick={resetGame}>Reset</button>
        </div>
      </div>
      <div className="game-info">
        <MoveList history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}