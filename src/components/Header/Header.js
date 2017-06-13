import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <h1 className="header__headline">Desound.</h1>
      <p className="header__description">A place for discovering similar artists and learn more about the bands you love.</p>
    </header>
  );
};

export default Header;
