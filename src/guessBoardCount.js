import React from 'react';
import './guessBoardCount.css';

export default function GuessBoardCount(props) {
    return  (
        <div className="guessboard-count-container">
            <p className="guessboard-count">Guess # <span id="number">{props.count}</span>!</p>
        </div> 
    )
}