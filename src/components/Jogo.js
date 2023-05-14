import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';
import { useState } from 'react';

export default function Jogo(props){

    const {playGame, stateGame, setStateGame, chosenWord, misteryArray, counter, winCounter, guessRight} = props;

    let image;
    let answer = "playing-word";
    let gameWin = false;
    let counterWin = 0;

    console.log(stateGame)

    if(counter===0) image = forca0;
    if(counter===1) image = forca1;
    if(counter===2) image = forca2;
    if(counter===3) image = forca3;
    if(counter===4) image = forca4;
    if(counter===5) image = forca5;
    if(counter===6) {
        image = forca6;
        answer = 'wrong-word';
        setStateGame(false);
    }

    for(let i = 0; i<misteryArray.length; i++){
        if(misteryArray[i]!=='_'){
            counterWin++;
            if(counterWin === misteryArray.length){
                setStateGame(false);
                gameWin=true;
            }
        }
    }

    function canPlay(){
        if(!stateGame){
            playGame();
        }
    }

    console.log('winCounter', winCounter);
    console.log('mistery', misteryArray.length);

    return (
        <div className="play">
            <img src={image} data-test='game-image' />
            <div>
                <button className="choose-word" onClick={playGame} data-test='choose-word'>
                    <p>Escolher Palavra</p>
                </button>
                <div className={answer}>
                    <span className={((counter!==6 && counterWin!==misteryArray.length) && !guessRight ) ? '' : 'hidden'} data-test='word'>{misteryArray.map( (mistery, i) => <p key={i}>{mistery}</p> )}</span>
                    <span className={counter!==6 ? 'hidden' : ''} data-test='word'><p>{chosenWord}</p></span>
                    <span className={((counterWin === misteryArray.length && counterWin!==0 && gameWin) || guessRight) ? 'right-word' : 'hidden'} data-test='word'><p>{chosenWord}</p></span>
                </div>
            </div>
        </div>
    )

}