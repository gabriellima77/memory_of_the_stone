const PlayAgain = ({reset, setIsReset})=> {
  const playEventHandler = ()=> {
    setIsReset(true);
    reset();
  }

  return (
    <button
      onClick={playEventHandler}
      className="again"
    >
      Play Again
    </button>
  );
}

export default PlayAgain;