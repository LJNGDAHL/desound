import React from 'react';
import './Content.css';
import Filter from '../Filter/Filter';
import Card from '../Card/Card';

const Content = ({ fetchData, limit, method, response, updateState, updateStateRefined }) => {

  // Properties needed in Filter component
  const controlProps = {
    fetchData,
    limit,
    method,
    updateStateRefined
  };

  let typeOfSearch;
  let cards = '';

  if (method === 'getsimilar') {
    typeOfSearch = response.similarartists.artist;
  } else if (method === 'gettoptracks') {
    typeOfSearch = response.toptracks.track;
  } else if (method === 'gettopalbums') {
    typeOfSearch = response.topalbums.album;
  }

  if (typeOfSearch) {
    cards = typeOfSearch.map((searchResult, index) => {
      /**
      * Update state and perform a new search based on current target
      * when user clicks on artist name. Only used when searching on similarartists.
      *
      * @param  {object} e The current event.
      */
      const onArtistClick = (e) => {
        updateState(e);
        fetchData();
      };

      return (<Card key={ index } searchResult={ searchResult } onClick={ onArtistClick } method={ method } response={ response }/>);
    });
  }

  return (
    <div className="fade-in">
      <div className="cards">{ cards }</div>
      <Filter { ...controlProps } />
    </div>
  );
};

export default Content;
