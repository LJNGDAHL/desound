import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import { API_key } from './credentials';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Content from './components/Content/Content';

// TODO: Fixa Router
// I Return i klassen App, skriv:
/*
  const About = () => <h1>About</h1>
  const Home = () => <h1>Home</h1>

  <Router>
    <div>
      // Plocka ut i en egen komponent.
      // Se till att skicka med props i den,
      samt att importera { Link } från react-router-dom.
      <nav>
        <NavLink to="/">Home</NavLink> // genom att använda NavLink, så får du active på köpet.
        <NavLink to="/about">About</NavLink>
      </nav>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/:random" component={ Home } /> // Skriver över alla.
    </div>
  </Router>
 */

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

  /**
   * Takes the event and update state property that correlate with target name.
   * @param  {Object} e The event.
   */
  updateState = (e) => {
    const { currentTarget: target } = e;
    this.setState({ [target.name] : target.value });
  }

  // FIXME: Replace above function with this when time is right. Then rename of course.
  updateStateRefined = input => {
    this.setState({ [input.name]: input.value } );
  }

  /**
   * Retrieves data from last.fm based on the band user decided to search on.
   */
  // FIXME: This should be broken down to smaller parts.
  fetchData = (data = {}) => {
    const { artist, method, limit, baseURL } = { ...this.state, ...data };
    const query = `${baseURL}&method=artist.${method}&artist=${artist}&limit=${limit}&api_key=${API_key}`;

    this.setState({ fetchInitialized: true, fetchPending: true, ...data });

    fetch(query)
      .then(response => response.json())
      .then((response) => {
        if (!response.error) {
          this.setState({ response, fetchCompleted: true });
              console.log(this.state.response);

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
    // TODO: Rename to SearchResult.
    const contentProps = {
      fetchData: this.fetchData,
      limit: this.state.limit,
      method: this.state.method,
      response: this.state.response,
      updateState: this.updateState,
      updateStateRefined: this.updateStateRefined
    };

    // If fetch is pending, show loader, else, show content.
    const searchResult = this.state.fetchPending ? <Loader /> : <Content { ...contentProps } />;

    // Only show div with content if user has initialized a search.
    const searchResultContainer = (this.state.fetchInitialized) ? <div>{ searchResult }</div> : '';

    return (
      <div className="app">
        <Header />
        <main className="front">
          <Search handleChange={ this.updateState } value={ this.state.artist } handleClick={ this.fetchData } />
        </main>
        { searchResultContainer }
      </div>
    );
  }
}

export default App;
