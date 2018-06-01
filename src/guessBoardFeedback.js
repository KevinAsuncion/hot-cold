import React from 'react';
import './guessBoardFeedback.css';


export default function GuessBoardFeedback(props) {
    return (
        <div className="guessboard-feedback">
            <p>{props.feedback}</p>
        </div>
    )
}