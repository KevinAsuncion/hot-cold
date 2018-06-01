import React from 'react';
import './gameInstructions.css'

export default function GameInstructions(props){
    return (
        <div className="game-instructions">
            <div className="game-instructions-container">
                <div className="game-instructions-content">
                    <h2>What do I do?</h2> 
                        <p>This is a Hot or Cold guessing game. The game goes like this:</p>
                    <ol>
                        <li>I pick a random secret number between 1 to 100 and keep it hiddien</li>
                        <li>You need to guess until you can find the hidden secret number</li>
                        <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
                    </ol>   
                        <p>So, are you ready?</p>
                        <div className="game-instructions-button-container"> 
                            <button className="game-instructions-button" onClick={props.onHideInstructions}> Got it </button>
                        </div> 
                </div>
            </div>
        </div>
    )
}
