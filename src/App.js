import React, { Component } from 'react';
import './App.css';
import { API_key } from './credentials';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Content from './components/Content/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: 'Mogwai', // 'mogwai' for testing purposes
      baseURL: 'http://ws.audioscrobbler.com/2.0/?format=json',
      country: '',
      fetchCompleted: false,
      fetchPending: false,
      fetchInitialized: false,
      genre: '',
      limit: 12,
      method: 'getsimilar', // for testing purposes
      response: {} // Used for storing response from Last.fm
    };
  }


  // FIXME: This should take an object instead of an event.
  /**
   * Takes the event and update state property that correlate with target name.
   * @param  {Object} e The event.
   */
  updateState = (e) => {
    const { currentTarget: target } = e;
    this.setState({ [target.name] : target.value });
  }

  /**
   * Retrieves data from last.fm based on the band user decided to search on.
   */
  fetchData = () => {
    const { artist, method, limit, baseURL } = this.state;
    const query = `${baseURL}&method=artist.${method}&artist=${artist}&limit=${limit}&api_key=${API_key}`;

    this.setState({ fetchInitialized: true, fetchPending: true });

    fetch(query)
      .then(response => response.json())
      .then((response) => {
        if (!response.error) {
          this.setState({ response, fetchCompleted: true });

          setTimeout(() => {
            this.setState({ fetchPending: false });
          }, 1500);
        } else {
          setTimeout(() => {
            this.setState({ fetchPending: false, fetchInitialized: false });
          }, 1500);
        }
      })
      .catch(err => console.log(err)); // TODO: Give user feedback.
  }

  render() {
    // Props needed in Content component.
    const contentProps = {
      fetchData: this.fetchData,
      limit: this.state.limit,
      method: this.state.method,
      response: this.state.response,
      updateState: this.updateState
    };

    // If fetch is pending, show loader, else, show content.
    const content = this.state.fetchPending ? <Loader /> : <Content { ...contentProps } />;

    // Only show div with content if user has initialized a search.
    const contentContainer = (this.state.fetchInitialized) ? <div>{ content }</div> : '';

    return (
      <div className="app">
        <Header />
        <main className="front">
          <Search handleChange={ this.updateState } value={ this.state.artist } handleClick={ this.fetchData } />
        </main>
        { contentContainer }
      </div>
    );
  }
}

export default App;
