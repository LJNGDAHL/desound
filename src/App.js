import React, { Component } from 'react';
import Card from './components/Card/Card';
import { API_key } from './credentials';
import './App.css';
import Search from './components/Search/Search';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: 'mogwai', // 'mogwai' for testing purposes
      baseURL: 'http://ws.audioscrobbler.com/2.0/?format=json',
      country: '',
      genre: '',
      limit: 5,
      fetchCompleted: false,
      method: 'artist.getsimilar', // for testing purposes
      response: {} // Used for storing response from Last.fm
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  fetchResponse = () => {
    const { artist, method, limit, baseURL } = this.state;
    const query = `${baseURL}&method=${method}&artist=${artist}&limit=${limit}&api_key=${API_key}`;

    fetch(query)
      .then(response => response.json())
      .then((response) => {
        this.setState({ response, fetchCompleted: true });

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

    return (
      <div className="App">
        <Header />
        <main> { /* TODO: Main should be a component. */ }
          <Search
            handleChange={ this.handleChange }
            value={ this.state.artist }
            fetchResponse={ this.fetchResponse }
          />
          { resultHeadline }
          <div className="Cards">
            { cards ? cards : '' }
            </div>
        </main>
      </div>
    );
  }
}

export default App;
