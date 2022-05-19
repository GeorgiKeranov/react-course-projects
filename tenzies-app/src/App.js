import { useState } from 'react';
import GameButton from './components/GameButton';
import GameBoard from './components/GameBoard';
import './App.css';

function App() { 
  const numberOfDices = 10;

  const [allowedDiceNumber, setAllowedDiceNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [dices, setDices] = useState(generateRandomDices(numberOfDices));

  function generateRandomDices(count) {
    const randomDices = [];

    for (let i = 0; i < count; i++) {
      randomDices.push({
        id: i,
        number: Math.floor(Math.random() * 6) + 1,
        selected: false
      });
    }

    return randomDices;
  }

  function startNewGame() {
    setDices(generateRandomDices(numberOfDices));
    setAllowedDiceNumber(0);
    setGameOver(false);
  }

  return (
    <div className="container">
      <div className="tenzies-game">
        <div className="tenzies__text">
          <h1>Tenzies</h1>
          
          <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
        </div>

        <GameBoard
          allowedDiceNumber={allowedDiceNumber}
          dices={dices}
          setAllowedDiceNumber={setAllowedDiceNumber}
          setDices={setDices}
          setGameOver={setGameOver} />

        <GameButton
          gameOver={gameOver}
          setDices={setDices}
          startNewGame={startNewGame}
          setGameOver={setGameOver} />
      </div>
    </div>
  );
}

export default App;
