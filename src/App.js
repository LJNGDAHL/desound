import React, { Component } from 'react';
import { API_key } from './credentials';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      baseURL: 'http://ws.audioscrobbler.com/2.0/?format=json',
      method: 'artist.getsimilar', // for testing purposes
      limit: 30,
      artist: 'mogwai', // 'mogwai' for testing purposes
      response: {} // Used for storing response from Last.fm
    };
  }

  fetchResponse = () => {
    const { artist, method, limit, baseURL } = this.state;
    const query = `${baseURL}&method=${method}&artist=${artist}&limit=${limit}&api_key=${API_key}`;

    fetch(query, { headers: { accept: 'application/json' }} )
      .then(body => body.json())
      .then((response) => {
        this.setState({ response });
      })
      .catch(err => console.log(err)); // TODO: Give user feedback.
  }

  render() {
    let userSearch = 'nothing';
    let similarartists;

    if (this.state.response.similarartists) {
      userSearch = this.state.response.similarartists['@attr'].artist;
      similarartists = this.state.response.similarartists.artist.map((artist , index) => {
        return <p key={ index }> { artist.name } </p>;
      });
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.fetchResponse}>Get artist</button>
        <h2>Result</h2>
        <p>You searched on {userSearch}.</p>
        {similarartists}
      </div>
    );
  }
}

export default App;
