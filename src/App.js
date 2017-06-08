import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { API_key } from './credentials';
import Search from './components/Search/Search';
import Range from './components/Range/Range';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: 'mogwai', // 'mogwai' for testing purposes
      baseURL: 'http://ws.audioscrobbler.com/2.0/?format=json',
      country: '',
      genre: '',
      limit: 12,
      method: 'artist.getsimilar', // for testing purposes
      response: {}, // Used for storing response from Last.fm
      fetchCompleted: false,
      fetchPending: false,
      fetchInitialized: false
    };
  }

  updateState = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }


  fetchResponse = () => {
    const { artist, method, limit, baseURL } = this.state;
    const query = `${baseURL}&method=${method}&artist=${artist}&limit=${limit}&api_key=${API_key}`;

    this.setState({ fetchInitialized: true, fetchPending: true });

    fetch(query)
      .then(response => response.json())
      .then((response) => {
        if (!response.error) {
          this.setState({ response, fetchCompleted: true });

          setTimeout(() => {
            this.setState({ fetchPending: false });
          }, 1500);
        }
      })
      .catch(err => console.log(err)); // TODO: Give user feedback.
  }

  render() {
    const resultHeadline = this.state.fetchCompleted ? <h2>Showing { this.state.limit } results</h2> : '';
    let cards;

    if (this.state.fetchCompleted) {
      cards = this.state.response.similarartists.artist.map((artist, index) => {
        return (<Card key={ index } artist={ artist } />);
      });
    }

    const loader = (this.state.fetchPending) ? <Loader /> :
      <div className="fade-in">
        { resultHeadline }
        <Range name="limit" value={ this.state.limit } handleInput={ this.updateState } handleChange={ this.fetchResponse } />
        <div className="cards">
          { cards }
        </div>
      </div>;

    const similarartists = (this.state.fetchInitialized) ?
      <main className="similar-artists">
        { loader }
      </main>
      :
      '';

    return (
      <div className="app">
        <Header />
        <main className="front">
          <Search handleChange={ this.updateState } value={ this.state.artist } fetchResponse={ this.fetchResponse } />
        </main>
        { similarartists }
      </div>
    );
  }
}

export default App;
