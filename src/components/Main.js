import { useState, useEffect } from 'react';
import useHttp from "../hooks/useHttp";
import useClick from "../hooks/useClick";
import '../styles/mainStyles.css';
import Card from "./Card";
import Lose from "./Lose";
import LevelUp from "./LevelUp";
import Loading from "./Loading";
import EndGame from "./EndGame";


const Main = (props)=> {
  const {
    isLevelUp, setIsLevelUp, level,
    score, setScore, 
    bestScore, setBestScore,
    reset, setIsReset
  } = props;

  const [isLoading, data] = useHttp('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic');
  const [cardsData, setCardsData] = useState(null);

  const putScore = ()=> {
    if(score >= bestScore) setBestScore(score + 1);
    setScore((prev)=> prev + 1);
  }

 //Everything about the click Event
  const {
    deck, setDeck,
    isDefeated,
    clickHandler
  } = useClick(setIsLevelUp, putScore);

  const getContent = ()=> {
    if(isDefeated) {
      return (
        <Lose 
          reset={reset}
          setIsReset={setIsReset}
        />
      );
    }
    else if(level > 5) return (
      <EndGame
        reset={reset}
        setIsReset={setIsReset}
      />
    );
    else if(isLevelUp) {
      return (level <= 4)
      ? <LevelUp />
      : <EndGame
          reset={reset}
          setIsReset={setIsReset}
        />;
    }
    else return (
      <main className="main-content">
        <h2 className="level">
          Choose a card! Level {level}!
        </h2>
        <div className="cards-box">
          {
            (deck)
            ? deck.map((card) => {
              return (
                <Card
                  key={card.cardId}
                  cardUrl={card.imgGold}
                  cardName={card.name}
                  clickHandler={clickHandler}
                />
              );
            })
            : null
          }
        </div>
      </main>
    );
  }

  useEffect(()=> {
    if(data && !cardsData) {
      const filteredData = data.filter(card=> (card.imgGold));
      setCardsData([...filteredData]);
    }
  },[data, cardsData]);

  useEffect(()=> {
    if(!deck && cardsData) {
      const aux = [...cardsData];
      // get Cards
      const newDeck = [];
      for(let i = 0; i < level * 4; i++) {
        const index = Math.floor(Math.random() * aux.length);
        const card = aux.splice(index, 1)[0];
        newDeck.push(card);
      }
      setDeck([...newDeck]);
      setCardsData([...aux]);
    };
  },[level, cardsData, setDeck]);

  return (isLoading)? <Loading /> : getContent();
}

export default Main;
