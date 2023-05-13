import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from '../palavras.js';
import { useState } from 'react'

export default function App(){

    const [stateGame, setStateGame] = useState(false);
    const [wordArray, setWordArray] = useState(palavras);
    //setWordArray(wordArray.sort(()=>Math.random() - 0.5));
    const [chosenWord, setChosenWord] = useState('');

    return (
        <div className="app">
            <Jogo chosenWord={chosenWord} setChosenWord={setChosenWord} setStateGame={setStateGame} wordArray={wordArray} setWordArray={setWordArray}/>
            <Letras stateGame={stateGame} setStateGame={setStateGame} />
        </div>
    )
}