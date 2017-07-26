import React, { Component } from 'react';
import Loader from '../components/Loader/Loader';
import SearchResult from '../components/SearchResult/SearchResult';
import SearchForm from '../components/SearchForm/SearchForm';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const {
      artist,
      fetchData,
      updateState,
      fetchStatus,
      onError
    } = this.props;

    let errorMessage;

    // FIXME: Make sure to reset this after each search
    if (onError.message) {
      errorMessage = (
        <div className="app__content--text fade-in">
          <h2 className="app__headline">Oops, something went wrong.</h2>
          <p>{ onError.message }</p>
        </div>
      );
    }

    const result = fetchStatus.pending ? <Loader /> : <SearchResult { ...this.props} />;
    const resultWrapper = fetchStatus.completed ? <div>{ result }</div> : '';
    const searchresult = errorMessage ? errorMessage : resultWrapper;

    return(
      <div className="app__content">
        <SearchForm handleChangeRefined={ updateState } value={ artist } onSubmit={ fetchData } />
        { searchresult }
      </div>
    );
  }
}

// This component needs acces to error messages from redux.
function mapStateToProps(state) {
  return {
    onError: state.onError,
    fetchStatus: state.fetchStatus
  };
}

export default connect(mapStateToProps)(Home);
