export default function GameButton(props) {
  function rollDices() {
    props.setDices(prevDices => prevDices.map(dice => {
      if (dice.selected) {
        return dice;
      }

      dice.number = Math.floor(Math.random() * 6) + 1;
      return dice;
    }));
  }

  if (props.gameOver) {
    return <button onClick={props.startNewGame} className="btn">Start a new game</button>;
  } else {
    return <button onClick={rollDices} className="btn">Roll</button>;
  }
}