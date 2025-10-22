import React from 'react';

export default function Square({ value, onClick }) {
    return (
        <button
            className={`square ${value === 'X' ? 'square-x' : value === 'O' ? 'square-o' : ''}`}
            onClick={onClick}
            aria-label={`Square ${value ?? 'empty'}`}
        >
                {value}
        </button>
    );
}