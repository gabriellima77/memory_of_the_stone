import '../styles/headerStyles.css';
import { useState } from 'react';

const Header = ({score, bestScore})=> {
  const [isOpen, setIsOpen] = useState(false);
  const showInfo = ()=> {
    return (
      <div className="info-box">
      <p>
        Every time you click a new card you gain one point. 
        If you click in the same card twice you lose.
      </p>
    </div>
    );
  }

  const clickHandler = ()=> {
    setIsOpen((prev)=> !prev);
  }

  return (
    <header className="header">
      <h1 className="logo">Memories of the <span className="y-logo">Stone</span></h1>
      <p className="score">Score: {score} / BestScore: {bestScore}</p>
      <button onClick={clickHandler} className="info"><i class="fas fa-info-circle"></i></button>
      {(isOpen)?  showInfo(): null}
    </header>
  );
}

export default Header;