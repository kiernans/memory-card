import React from "react";
import '../styles/Header.css'

const Header = ({ score, bestScore }) => {

    return (
        <div className="Header">
            <h1>Final Fantasy Memory Game</h1>
            <p>Current Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
};

export default Header;