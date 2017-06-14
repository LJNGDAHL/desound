import React from 'react';
import Loader from '../components/Loader/Loader';
import SearchResult from '../components/SearchResult/SearchResult';
import Search from '../components/Search/Search';

const Home = ({ artist, fetchData, limit, method, response, updateState, fetchInitialized, fetchPending }) => {
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
        <Search handleChange={ updateState } value={ artist } handleClick={ fetchData } />
        { searchResultContainer }
      </main>
    </div>
  );
};

export default Home;
