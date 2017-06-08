import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { API_key } from './credentials';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import ControlSection from './components/ControlSection/ControlSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: 'Mogwai', // 'mogwai' for testing purposes
      baseURL: 'http://ws.audioscrobbler.com/2.0/?format=json',
      country: '',
      genre: '',
      limit: 12,
      method: 'getsimilar', // for testing purposes
      response: {}, // Used for storing response from Last.fm
      fetchCompleted: false,
      fetchPending: false,
      fetchInitialized: false
    };
  }

  /**
   * Takes the event and update state property that correlate with target name.
   * @param  {Object} e The event.
   */
  updateState = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  /**
   * Retrieves data from
   * @return {[type]} [description]
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
    let cards;

    if (this.state.fetchCompleted) {
      cards = this.state.response.similarartists.artist.map((artist, index) => {
        return (<Card key={ index } artist={ artist } />);
      });
    }

    const loader = (this.state.fetchPending) ? <Loader /> :
      <div className="fade-in">
        <div className="cards">{ cards }</div>
        <ControlSection method={ this.state.method } limit={ this.state.limit } updateState={ this.updateState } fetchData={ this.fetchData } />
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
          <Search handleChange={ this.updateState } value={ this.state.artist } handleClick={ this.fetchData } />
        </main>
        { similarartists }
      </div>
    );
  }
}

export default App;
