import '../styles/headerStyles.css';

const Header = ({score, bestScore})=> {
  return (
    <header className="header">
      <h1 className="logo">Memories of the <span className="y-logo">Stone</span></h1>
      <p className="score">Score: {score} / BestScore: {bestScore}</p>
    </header>
  );
}

export default Header;