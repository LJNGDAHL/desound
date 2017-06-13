import React from 'react';
import Loader from '../Loader/Loader';
import SearchResult from '../SearchResult/SearchResult';
import Search from '../Search/Search';

const Home = props => {
  const {
    artist,
    fetchData,
    limit,
    method,
    response,
    updateState,
    fetchInitialized,
    fetchPending,
    value } = props;

    // Props needed in SearchResult component.
  const resultProps = {
    fetchData,
    limit,
    method,
    response,
    updateState
  };

  const searchResult = fetchPending ? <Loader /> : <SearchResult { ...resultProps } />;
  const searchResultContainer = fetchInitialized ? <div>{ searchResult }</div> : '';

  return(
    <div className="app">
      <main className="front">
        <h1>Discover he he!</h1>
        <Search handleChange={ updateState } value={ artist } handleClick={ fetchData } />
      </main>
    </div>
  );
};

export default Home;
