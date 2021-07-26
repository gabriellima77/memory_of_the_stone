import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isLevelUp, setIsLevelUp] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const reset = ()=> {
    setScore(0);
    setLevel(1);
    setIsLevelUp(false);
    setTimeout(()=> setIsReset(false), 0);
  }

  useEffect(()=> {
    let timeOut;
    if(isLevelUp){
      timeOut = setTimeout(()=>{
        setIsLevelUp(false);
        setLevel((prev)=> prev + 1);
      }, 2000);
      
    }
    return ()=> clearTimeout(timeOut);
  }, [isLevelUp]);

  return (
    <div className="App">
      <Header
        score={score}
        bestScore={bestScore}
      />{
        isReset
        ? null
        : <Main
            isLevelUp={isLevelUp}
            level={level}
            setIsLevelUp={setIsLevelUp}
            score={score}
            setScore={setScore}
            setBestScore={setBestScore}
            bestScore={bestScore}
            reset={reset}
            setIsReset={setIsReset}
          />
      }
      <Footer />
    </div>
  );
}

export default App;
