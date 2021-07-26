import '../styles/cardStyles.css';
import { useState } from 'react';

const Card = (props)=> {
  const {
    cardUrl, cardName,
    clickHandler
  } = props;
  const [isClicked, setIsClicked] = useState(false);
  const selectCard = ()=> {
    if(isClicked) clickHandler(true);
    else {
      setIsClicked(true);
      clickHandler(false);
    } 
  }
  return (
    <div onClick={selectCard} className="card">
      <img src={cardUrl} alt={cardName} className="card-img" />
      <h3 className="card-name">{cardName}</h3>
      <div className="vector"></div>
    </div>
  );
}

export default Card;