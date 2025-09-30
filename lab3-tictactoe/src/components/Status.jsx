import React from 'react';

export default function Status({ winner, xIsNext }) {
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    return <div className="status">{status}</div>;
}