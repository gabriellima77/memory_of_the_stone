import PlayAgain from "./PlayAgain";

const EndGame = ({reset, setIsReset})=> {
  
  return(
    <div className="text-box">
      <h3 className="end">
        Awesome Your name is bigger then all the Legends.
      </h3>
      <PlayAgain 
        reset={reset}
        setIsReset={setIsReset}
      />
    </div>
  );
}

export default EndGame;
