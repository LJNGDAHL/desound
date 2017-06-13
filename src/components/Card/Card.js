import React from 'react';
import './Card.css';
import Link from '../Link/Link';

const Card = ({ key, searchResult, method, onClick }) => {
  // TODO: Figure out why key is not working!
  // TODO: Limit search when searching on top albums.
  const youtubeLink = `https://www.youtube.com/results?search_query=${searchResult.name}`;
  let methodSpecificData = {};

  // Render different content based on search method.
  switch (method) {
  case 'getsimilar':
    methodSpecificData = {
      imageNumber: 4,
      uniqueContent:
        <div className="card__content">
          <button className="button button--minimal" name="artist" value={ searchResult.name } onClick={ onClick }>
            <h3 className="card__artist">{ searchResult.name }</h3>
          </button>
          <p className="match">{ Math.round(searchResult.match * 100) } % Match</p>
          <Link url={youtubeLink}>Explore on Youtube</Link>
        </div>
    };
    break;
  case 'gettoptracks':
    methodSpecificData = {
      imageNumber: 2,
      uniqueContent:
        <div className="card__content">
          <h3 className="card__artist">{ searchResult.name }</h3>
          <p className="listeners">{ searchResult.listeners } listeners</p>
          <Link url={youtubeLink}>Explore on Youtube</Link>
        </div>
    };
    break;
  case 'gettopalbums':
    methodSpecificData = {
      imageNumber: 2,
      uniqueContent:
        <div className="card__content">
          <h3 className="card__artist">{ searchResult.name }</h3>
          <p className="playcount">{ searchResult.playcount } scrobbles on Last.fm</p>
          <Link url={youtubeLink}>Explore on Youtube</Link>
        </div>
    };
    break;
  default:
    methodSpecificData = {};
  }

  return (
    <div className="card" key={ key }>
      <div className="card__img-container">
        <img className="card__img" src={ searchResult.image[methodSpecificData.imageNumber]['#text'] } alt={ searchResult.name }/>
      </div>
      { methodSpecificData.uniqueContent }
    </div>
  );
};

export default Card;
