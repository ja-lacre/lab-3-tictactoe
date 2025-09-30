import React from 'react';
import Square from './square';

export default function Board({ squares, onSquareClick }) {
    function renderSquare(i) {
        return (
            <Square key={i} value={squares[i]} onClick={() => onSquareClick(i)} />
        );
    }

    return (
        <div>
            <div className="board-row">{[0,1,2].map(renderSquare)}</div>
            <div className="board-row">{[3,4,5].map(renderSquare)}</div>
            <div className="board-row">{[6,7,8].map(renderSquare)}</div>
        </div>
    );
}