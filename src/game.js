import React, { Component } from 'react';
import './game.css';
import GameInstructions from './gameInstructions'
import NavBar from './navBar'
import GuessBoard from './guessBoard'

export default class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedback:'Make your guess',
      correctAnswer: Math.floor(Math.random()*100) + 1,
      instructions: false,
      guesses: [],
    }
  }

  restartGame() {
    this.setState({
      feedback:'Make your guess',
      correctAnswer: Math.floor(Math.random()*100) + 1,
      instructions: false,
      guesses: []
    });
  }

  showInstructions(){
    this.setState({
      instructions: true
    })
  }

  hideInstructions(){
    this.setState({
      instructions: false
    })
  }

  makeGuess(guess){
  
    if(this.state.guesses.includes(guess)){
      alert('you already guessed that number. please enter a new one.')
      return
    }

    let newFeedback; 
    const difference = Math.abs(guess - this.state.correctAnswer)
    if (difference > 10){
      newFeedback = 'cold'
    } else if (difference <=10 && difference > 0){
      newFeedback = 'hot'
    } else if(difference === 0){
      newFeedback = 'You Won! Press new game to start a new game.'
    }
    this.setState({
      feedback: newFeedback,
      guesses:[...this.state.guesses, guess]
    })
  }

  render() {
    const { feedback, guesses, instructions } = this.state
    const count = guesses.length 
   if(instructions){
     return <GameInstructions onHideInstructions={()=> this.hideInstructions()} />
   } 
    return (
      <div className="Game">  
        <header role="banner" className="Game-header">
          <NavBar 
            onRestartGame={ () => this.restartGame()}
            onShowInstructions={()=> this.showInstructions()}
            />
        </header>
        <main role="main">
          <GuessBoard 
            feedback={feedback} 
            count={count} 
            guesses={guesses}
            onMakeGuess={guess => this.makeGuess(guess)}
            />
        </main>
      </div>
    );
  }
}

