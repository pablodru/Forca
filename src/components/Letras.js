import { useState } from "react";

export default function Letras(props) {
  const {
    chosenWord,
    clickedLeter,
    setClickedLeter,
    selectedLeters,
    setSelectedLeters,
    stateGame,
    arrayWord,
    setMisteryArray,
    misteryArray,
  } = props;

  const arrayLeters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function verifyLeter(leter) {
    console.log(leter);
    let newLeter = leter;
    setClickedLeter(leter);
    console.log(arrayWord, 3);

    const newArrayLeters = [...selectedLeters, newLeter];
    let newMistery = [...misteryArray];

    setSelectedLeters(newArrayLeters);
    

    arrayWord.forEach((l, i) => {
      if (l.toUpperCase() === leter) {
        newMistery[i] = l;
        console.log(l.toUpperCase(), leter);
        setMisteryArray(newMistery);
        
      } else {
        console.log('não foi', l)
      }
    });
    
  }

  return (
    <div className="leters">
      {arrayLeters.map((leter) => (
        <button
          key={leter}
          className="leter"
          disabled={selectedLeters.includes(leter) || !stateGame}
          onClick={() => verifyLeter(leter)}
        >
          {leter}
        </button>
      ))}
    </div>
  );
}
