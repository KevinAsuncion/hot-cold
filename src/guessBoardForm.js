import React, { Component } from 'react';
import './guessBoardForm.css'

export default class GuessBoardForm extends Component {
   onSubmit(e) {
       e.preventDefault(); 
       const value = this.input.value
       this.props.onMakeGuess(value);
       this.input.value = '';
   }

   render(){
       return (
           <div className="guessform-container">
               <form onSubmit={ e=> this.onSubmit(e)}>
                   <input
                    type="number"
                    autoComplete="off"
                    name="userGuess"
                    id="userGuess"
                    ref={ input => (this.input = input) }
                    required
                    min="1"
                    max="100"
                    placeholder="Enter your guess"
                   />
                   <button
                        type="submit"
                        name="submit"
                        id="guessButton"
                        className="guessboard-form-button"
                    >
                    Guess
                    </button>
               </form>
           </div>
       );
   }
}
