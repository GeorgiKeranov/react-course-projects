export default function GameBoard(props) {
  const diceElements = props.dices.map(dice => {
    return (
      <div
        key={dice.id}
        className={`dice${dice.selected ? ' dice--selected' : ''}`}
        onClick={() => selectDice(dice)}>
            {dice.number}
      </div>
    );
  });
  
  function selectDice(selectedDice) {
    let allowedDiceNumber = props.allowedDiceNumber;
    if (allowedDiceNumber === 0) {
      allowedDiceNumber = selectedDice.number;
      props.setAllowedDiceNumber(selectedDice.number);
    }

    let allDicesAreSelected = true;

    props.setDices(prevDices => {
      for (const dice of prevDices) {
        if (dice.selected) {
          continue;
        }

        if (dice.id === selectedDice.id && dice.number === allowedDiceNumber) {
          dice.selected = true;
          continue;
        }
        
        allDicesAreSelected = false;
      }

      if (allDicesAreSelected) {
        props.setGameOver(true);
      }

      return [...prevDices];
    });
  }

  return (
    <div className="tenzies__board">
      {diceElements}
    </div>
  );
}