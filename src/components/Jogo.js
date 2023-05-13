import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
import { useState } from 'react';

export default function Jogo(props){

    const {setStateGame, chosenWord,setChosenWord, wordArray, setWordArray} = props;
    setWordArray(wordArray.sort(()=>Math.random() - 0.5));

    console.log(chosenWord);


    const numberImages=[0,1,2,3,4,5,6];
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    return (
        <div className="play">
            <img src={forca0} />
            <div>
                <button className="choose-word" onClick={() => {
                    setStateGame(true);
                    setChosenWord(wordArray[0]);}}>
                    <p>Escolher Palavra</p>
                </button>
                <div className="playing-word"> {/*Outras classes: playing-word wrong-word e right-word */}
                    <p>{chosenWord}</p>
                </div>
            </div>
        </div>
    )

}