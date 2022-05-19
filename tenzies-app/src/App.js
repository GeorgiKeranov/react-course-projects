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

  const diceElements = dices.map(dice => {
    return (
      <div className="dice">{dice}</div>
    );
  });

  return (
    <div className="container">
      <div className="tenzis-game">
        <div className="tenzis__text">
          <h1>Tenzies</h1>
          
          <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
        </div>

        <div className="tenzis__board">
          {dices}
        </div>

        <button className="btn">Roll</button>
      </div>
    </div>
  );
}

export default App;
