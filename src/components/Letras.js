export default function Letras(props){

    const {stateGame, setStateGame} = props;
    

    const arrayLeters = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <div className='leters'>
            {arrayLeters.map(leter => <button key={leter} className={!stateGame ? 'disabled' : 'abled'} disabled={!stateGame} > <p>{leter}</p> </button>)} {/** classe abled e disabled */}
        </div>
    )
}