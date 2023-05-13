import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from '../palavras.js';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click.js';

export default function App(){

    const [stateGame, setStateGame] = useState(false);
    const [wordsArray, setWordsArray] = useState(palavras);
    const [chosenWord, setChosenWord] = useState('');
    let [clickedLeter, setClickedLeter] = useState('');
    let [misteryArray, setMisteryArray] = useState([]);
    let [arrayWord, setArrayWord] = useState([]);
    const [selectedLeters, setSelectedLeters] = useState([]);
    

    return (
        <div className="app">
            <Jogo selectedLeters={selectedLeters} playGame={playGame} misteryArray={misteryArray} chosenWord={chosenWord} setChosenWord={setChosenWord} clickedLeter={clickedLeter} />
            <Letras stateGame={stateGame} selectedLeters={selectedLeters} setSelectedLeters={setSelectedLeters} misteryArray={misteryArray} setMisteryArray={setMisteryArray} arrayWord={arrayWord} setArrayWord={setArrayWord} chosenWord={chosenWord} clickedLeter={clickedLeter} setClickedLeter={setClickedLeter} />
        </div>
    )

    function playGame(){
        setWordsArray(wordsArray.sort(()=>Math.random() - 0.5));
        const newWord = wordsArray[0];
        setChosenWord(newWord);
        setStateGame(true);

        const misteryWord = newWord.replace(/[a-zA-Z]/g,'_');
        setMisteryArray(misteryWord.split(''));
        setArrayWord(newWord.split(''));
        console.log(misteryArray, arrayWord, newWord);
    }
}