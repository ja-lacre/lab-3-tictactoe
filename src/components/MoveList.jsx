import React from 'react';

export default function MoveList({ history, jumpTo }) {
    return (
    <ol className="move-list">
            {history.map((_, move) => {
                const description = move ? `Go to move #${move}` : 'Go to game start';
                return (
                    <li key={move} className="move-item">
                        <button className="btn" onClick={() => jumpTo(move)}>{description}</button>
                    </li>
                );
            })}
        </ol>
    );
}