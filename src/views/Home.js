import React from 'react';
import Loader from '../components/Loader/Loader';
import SearchResult from '../components/SearchResult/SearchResult';
import SearchForm from '../components/SearchForm/SearchForm';

const Home = ({ artist, fetchData, limit, method, response, updateState, fetchInitialized, fetchPending }) => {

  let errorMessage;

  // If there is some kind of error with the API request, this text is shown
  if (response.type === 'error') {
    errorMessage = (
      <div className="app__content--text fade-in">
        <h2 className="app__headline">{ response.title }</h2>
        <p>{ response.text }</p>
      </div>
    );
  }

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
  const searchresult = errorMessage ? errorMessage : resultWrapper;

  return(
    <div className="app__content">
      <SearchForm handleChangeRefined={ updateState } value={ artist } onSubmit={ fetchData } />
      { searchresult }
    </div>
  );
};

export default Home;
