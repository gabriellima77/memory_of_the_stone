import React from 'react';
import '../styles/footerStyles.css';
import githubLight from '../assets/GitHub-Mark-Light-64px.png';

const Footer = ()=> {
  return(
    <footer className="footer">
      <p>Made by Gabriel Lima</p>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/gabriellima77"
      >
        <img
          alt="github logo"
          src={githubLight}
          className="logo-github"
        />
      </a>
    </footer>
  );
}

export default Footer;