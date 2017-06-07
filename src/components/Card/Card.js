import React from 'react';
import './Card.css';
import Link from '../Link/Link';

const Card = ({ key, artist }) => {
  const youtubeLink = `https://www.youtube.com/results?search_query=${artist.name}`;

  return (
    <div className="card" key={ key }>
      <div className="card__img-container">
        <img className="card__img" src={ artist.image[4]['#text'] } alt={ artist.name }/>
      </div>
      <div className="card__content">
        <p>{ artist.name }</p>
        <p className="match">{ Math.round(artist.match * 100) } % Match</p>
        <Link url={youtubeLink}>Explore on Youtube</Link>
      </div>
    </div>
  );
};

export default Card;
