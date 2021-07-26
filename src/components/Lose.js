import PlayAgain from "./PlayAgain";

const Lose = ({reset, setIsReset})=> {
  return(
    <div className="text-box">
      <h3 className="lose">Defeat!</h3>
      <p className="sm-txt">You are now just a memory of what you were one time!</p>
      <PlayAgain 
        reset={reset}
        setIsReset={setIsReset}
      />
    </div>
  );
}

export default Lose;