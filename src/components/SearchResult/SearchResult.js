import React from 'react';
import './SearchResult.css';
import Filter from '../Filter/Filter';
import Card from '../Card/Card';
import { extractEvent } from '../../utils';

const SearchResult = ({ fetchData, limit, method, response, updateState }) => {
  // Properties needed in Filter component
  const filterProps = {
    fetchData,
    limit,
    method,
    updateState
  };

  let typeOfSearch;
  let cards = '';

  switch (method) {
  case 'getsimilar':
    typeOfSearch = response.similarartists.artist;
    break;
  case 'gettoptracks':
    typeOfSearch = response.toptracks.track;
    break;
  case 'gettopalbums':
    typeOfSearch = response.topalbums.album;
    break;
  default:
    typeOfSearch = undefined;
  }

  if (typeOfSearch) {
    cards = typeOfSearch.map((searchResult, index) => {
      /**
      * Update state and perform a new search based on current target
      * when user clicks on artist name. Only used when searching on similarartists.
      *
      * @param  {object} e The current event.
      */
      const onArtistClick = extractEvent((name, value) => {
        fetchData({ [name]: value });
      });

      return (<Card key={ index } searchResult={ searchResult } onClick={ onArtistClick } method={ method } response={ response }/>);
    });
  }

  return (
    <div className="fade-in">
      <Filter { ...filterProps } />
      <div className="cards">{ cards }</div>
    </div>
  );
};

export default SearchResult;
