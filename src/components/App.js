import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from '../palavras.js';
import Chute from './Chute.js';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click.js';

export default function App(){

    const [stateGame, setStateGame] = useState(false);
    const [wordsArray, setWordsArray] = useState(palavras);
    const [chosenWord, setChosenWord] = useState('');
    let [misteryArray, setMisteryArray] = useState([]);
    let [arrayWord, setArrayWord] = useState([]);
    const [selectedLeters, setSelectedLeters] = useState([]);
    const [counter, setCounter] = useState(0);
    const [winCounter, setWinCounter] = useState(0);
    const [guess, setGuess] = useState('');
    const [guessRight, setGuessRight] = useState(false);
    

    return (
        <div className="app">
            <Jogo guessRight={guessRight} stateGame={stateGame} setStateGame={setStateGame} winCounter={winCounter} counter={counter} playGame={playGame} misteryArray={misteryArray} chosenWord={chosenWord} />
            <Letras setWinCounter={setWinCounter} winCounter={winCounter} counter={counter} setCounter={setCounter} stateGame={stateGame} selectedLeters={selectedLeters} setSelectedLeters={setSelectedLeters} misteryArray={misteryArray} setMisteryArray={setMisteryArray} arrayWord={arrayWord} setArrayWord={setArrayWord}/>
            <Chute stateGame={stateGame} setCounter={setCounter} playGame={playGame} setGuessRight={setGuessRight} chosenWord={chosenWord} guess={guess} setGuess={setGuess} setWinCounter={setWinCounter} setStateGame={setStateGame} misteryArray={misteryArray} />
        </div>
    )

    function playGame(){
        setWordsArray(wordsArray.sort(()=>Math.random() - 0.5));
        const newWord = wordsArray[0];
        setChosenWord(newWord);
        setStateGame(true);
        setSelectedLeters([]);
        setCounter(0);

        const misteryWord = newWord.replace(/[a-zA-Z]/g,'_');
        setMisteryArray(misteryWord.split(''));
        setArrayWord(newWord.split(''));
        console.log(misteryArray, arrayWord, newWord);
    }
}