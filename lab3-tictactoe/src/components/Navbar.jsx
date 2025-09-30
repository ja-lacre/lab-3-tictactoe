import React from 'react';

export default function Navbar({ darkMode, onToggleTheme }) {
  return (
    <div className="navbar">
      <span>Laboratory 3: Tic-Tac-Toe</span>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}