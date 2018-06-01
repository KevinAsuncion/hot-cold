import React from 'react';
import './navBar.css'

export default function NavBar(props){
    return (
        <nav>
            <ul className="Game-Nav">
                <li onClick={props.onShowInstructions}>WHAT?</li>
                <li onClick={props.onRestartGame}>+NEW GAME</li>
            </ul>
        </nav> 
    )
}