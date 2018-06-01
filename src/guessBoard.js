import React from 'react';
import './guessBoard.css'
import GuessBoardHeader from './guessBoardHeader';
import  './guessBoardHeader.css';
import GuessBoardFeedback from './guessBoardFeedback';
import './guessBoardFeedback.css';
import GuessBoardForm from './guessBoardForm';
import './guessBoardForm.css';
import GuessBoardCount from './guessBoardCount';
import './guessBoardCount.css';
import GuessBoardGuesses from './guessBoardGuesses';
import './guessBoardGuesses.css'

export default function GuessBoard(props){
    return(
        <div className="guessboard">
            <div className="guessboard-container">
                <GuessBoardHeader />
                <GuessBoardFeedback feedback={props.feedback} />
                <GuessBoardForm onMakeGuess={guess => props.onMakeGuess(guess)}/>
                <GuessBoardCount count={props.count}/>
                <GuessBoardGuesses guesses={props.guesses}/>
            </div>
        </div>
    )
}