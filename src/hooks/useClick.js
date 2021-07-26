import { useState, useEffect } from "react";

const useClick = (setIsLevelUp, putScore)=> {
  const [deck, setDeck] = useState(null);
  const [counter, setCounter] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isDefeated, setIsDefeated] = useState(false);

  const clickHandler = (wasClicked)=> {
    setIsClick(true);
    if(!wasClicked) {
      putScore();
      // Change the Level
      if(counter + 1 >= deck.length) {
        setCounter(0);
        setIsLevelUp(true);
        setDeck(null);
      }
      else setCounter((prev)=> prev + 1);
    } else setIsDefeated(true);
    
  }

  useEffect(()=> {
    if(isClick && deck) {
      // Shuffle cards
      const aux = [...deck];
      const newDeck = [];
      for(let i = 0; i < deck.length; i++) {
        const index = Math.floor(Math.random() * aux.length);
        const card = aux.splice(index, 1)[0];
        newDeck.push(card);
      }
      setDeck([...newDeck]);
      setIsClick(false);
    }
  }, [isClick, deck]);

  return {
    deck, setDeck,
    isDefeated,
    clickHandler
  };
}

export default useClick;