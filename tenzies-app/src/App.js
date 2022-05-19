import { useState } from 'react';
import './App.css';

function App() {
  const [dices, setDices] = useState(generateRandomDices(10));

  function generateRandomDices(count) {
    const randomDices = [];

    for (let i = 0; i < count; i++) {
      randomDices.push(Math.floor(Math.random() * 6) + 1);
    }

    return randomDices;
  }

  const diceElements = dices.map((dice, index) => {
    return (
      <div key={index} className={`dice${index === 1 ? ' dice--selected' : ''}`}>{dice}</div>
    );
  });

  return (
    <div className="container">
      <div className="tenzies-game">
        <div className="tenzies__text">
          <h1>Tenzies</h1>
          
          <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
        </div>

        <div className="tenzies__board">
          {diceElements}
        </div>

        <button className="btn">Roll</button>
      </div>
    </div>
  );
}

export default App;
