import React from 'react';
import './guessBoardGuesses.css';

export default function GuessBoardGuesses(props){
    let guesses = props.guesses.map((guess,index) => { 
           return <li key={index}>{guess}</li>
    });

    return (
        <div className="guessboard-guesses-container"> 
            <ul className="guessboard-guesses">
                {guesses}
            </ul>
        </div>
    )
}