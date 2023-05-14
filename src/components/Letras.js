import { useState } from "react";

export default function Letras(props) {
  const {
    selectedLeters,
    setSelectedLeters,
    stateGame,
    arrayWord,
    setMisteryArray,
    misteryArray,
    counter,
    setCounter,
    winCounter,
    setWinCounter,
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

  let counterLeters=0;

  function verifyLeter(leter) {
    let newLeter = leter;

    const newArrayLeters = [...selectedLeters, newLeter];
    let newMistery = [...misteryArray];

    setSelectedLeters(newArrayLeters);
  

    arrayWord.forEach((l, i) => {
      if (l.toUpperCase() === leter) {
        newMistery[i] = l;
        setWinCounter(winCounter+1);
        setMisteryArray(newMistery);

        console.log(winCounter, 'win');
        
      } else {
        counterLeters++;
        if(counterLeters === arrayWord.length){
          setCounter(counter+1)
        }
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
          data-test='letter'
        >
          {leter}
        </button>
      ))}
    </div>
  );
}
