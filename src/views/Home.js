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

  const result = fetchPending ? <Loader /> : <SearchResult { ...resultProps } />;
  const resultWrapper = fetchInitialized ? <div>{ result }</div> : '';

  return(
    <div className="app__content">
      <Search handleChange={ updateState } value={ artist } onSubmit={ fetchData } />
      { resultWrapper }
    </div>
  );
};

export default Home;
