export default function Chute(props) {

    const {guess, setGuess, chosenWord, setWinCounter, setStateGame, misteryArray, setGuessRight, setCounter, stateGame} = props;

    function guessWord(){
        setStateGame(false);
        if(guess===chosenWord){
            setWinCounter(misteryArray.length);
            setGuessRight(true);
            setGuess('');
        } else {
            setCounter(6);
            setGuess('');
        }
    }

    return (
        <div className="guess">
        <div>
            <p> Já sei a palavra! </p>
        </div>
        <input onChange={event => setGuess(event.target.value)} disabled={!stateGame} value={guess} data-test='guess-input' ></input>
        <button onClick={guessWord} disabled={!stateGame} data-test="guess-button" >Chutar</button>
        </div>
    );
}
