import '../styles/textBoxStyles.css';

const LevelUp = ()=> {
  const sentences = [
    'You are so wise!',
    'Your memory is as good as said in the legends.',
    'What a Legend!',
    'Your name will be remembered for centuries!',
    'Exactly as the old scrolls. Amazing!',
    'This memory power is unbelievable.',
  ]

  const getSentence = ()=> {
    const index = Math.floor(Math.random() * sentences.length);
    return sentences[index];
  }

  return (
    <div className="text-box">
      <h3 className="level-up">
        {getSentence()}
      </h3>
      <p className="sm-txt">
        LEVEL UP!
      </p>
    </div>
  );
}

export default LevelUp;