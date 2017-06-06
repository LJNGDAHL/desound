import React, { Component } from 'react';
import { API_key } from './credentials';
import './App.css';
import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: 'mogwai', // 'mogwai' for testing purposes
      baseURL: 'http://ws.audioscrobbler.com/2.0/?format=json',
      country: '',
      genre: '',
      limit: 30,
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
        <Header />
        <InputField name="artist" handleChange={ this.handleChange } value={ this.state.artist } />
        <Button handleClick={ this.fetchResponse }>Get artist</Button>
        <h2>Result</h2>
        <p>You searched on {userSearch}.</p>
        {similarartists}
      </div>
    );
  }
}

export default App;
