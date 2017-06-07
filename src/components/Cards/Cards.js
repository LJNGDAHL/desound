import React from 'react';
import './Cards.css';

const Cards = ({ artists, showCards }) => {
  if (!showCards) {
    return null;
  }

  const artistCards = artists.artist.map((artist , index) => {
    return (
      <div className="Cards__card" key={ index }>
        <div className="Cards__img-container">
          <img className="Cards__img" src={ artist.image[4]['#text'] } alt={ artist.name }/>
        </div>
        <div className="Cards__content">
          <p>{ artist.name }</p>
          <p className="match">{ Math.round(artist.match * 100) } % Match</p>
        </div>
      </div>
    );
  });

  return (
    <div className="Cards">
      { artistCards }
    </div>
  );
};

export default Cards;
