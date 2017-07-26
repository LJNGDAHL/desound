import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

// Redux specific stuff
import { onErrorWithRedux } from './actions/actionCreators';
import { connect } from 'react-redux';

// Views
import Home from './views/Home';
import About from './views/About';
import Lastfm from './views/Lastfm';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      baseURL: `${API_PREFIX}http://ws.audioscrobbler.com/2.0/?format=json`,
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
   * Takes a name and value and updates state accordingly.
   * @param  {string} name  The state property to be updated.
   * @param  {any}    value The new value
   */
  updateState = (name, value) => {
    this.setState({ [name] : value });
  }

  /**
   * Sets a timeout in order to make the process look 'smoother',
   * and then takes a string that is a message to the user.
   * @param  {string} userInfo Depending on when the functions is runned.
   */
  onError = (userInfo) => {
    setTimeout(() => {
      this.setState({
        fetchPending: false,
        fetchInitialized: false,
        response: {
          type: 'error',
          title: 'Oops, something went wrong.',
          text: userInfo
        }
      });
    }, 1500);
  }

  /**
   * Retrieves data from last.fm based on the band user decided to search on.
   */
  fetchData = (data = {}) => {
    const { artist, method, limit, baseURL } = { ...this.state, ...data };
    const query = `${baseURL}&method=artist.${method}&artist=${artist}&limit=${limit}&api_key=${API_KEY}`;
    const methodMap = {
      getsimilar: 'similarartists.artist',
      gettoptracks: 'toptracks.track',
      gettopalbums: 'topalbums.album'
    };

    this.setState({ fetchInitialized: true, fetchPending: true, ...data });

    fetch(query)
      .then(response => response.json())
      .then((response) => {
        // Get path based on search method
        const path = methodMap[method];
        // Get data from response using methodMap
        const data = path.split('.').reduce((part, key) => part[key], response);
        if (!response.error && data.length !== 0) {
          this.setState({ response, fetchCompleted: true });
          setTimeout(() => {
            this.setState({ fetchPending: false, limit: data.length });
          }, 1500);
        } else {
          this.props.dispatch(onErrorWithRedux('Are you sure that band exists? It all seems to be a bit too obscure for me. Try again with another band, or come back later!'));
          this.setState({
            fetchPending: this.props.error.fetchPending,
            fetchInitialized: this.props.error.fetchInitialized
          });
          this.onError('Are you sure that band exists? It all seems to be a bit too obscure for me. Try again with another band, or come back later!');
        }
      })
      .catch(() => {
        // TODO: Replace onError with on ErrorWithRedux, as soon as it is working.
        this.props.dispatch(onErrorWithRedux('I have no idea what went wrong. Please try again later.'));
        this.setState({
          fetchPending: this.props.response.fetchPending,
          fetchInitialized: this.props.response.fetchInitialized
        });
        this.onError('I have no idea what went wrong. Please try again later.', );
      });
  }


  render() {
    // Props needed in 'Home' Component
    const homeProps = {
      artist: this.state.artist,
      fetchData: this.fetchData,
      fetchInitialized: this.state.fetchInitialized,
      fetchPending: this.state.fetchPending,
      limit: this.state.limit,
      method: this.state.method,
      response: this.state.response,
      updateState: this.updateState
    };

    return (
      <Router history={ this.props.history }>
        <div className="wrapper">
          <Header/>
          <Route render={({ location }) => (
            <CSSTransitionGroup component="main" className="app" transitionName="fade" transitionEnterTimeout={ 0 }  transitionLeaveTimeout={ 0 }>
              <Switch key={ location.key } location={ location }>
                <Route exact path='/' render={ () => <Home { ...homeProps } /> } />
                <Route path="/about" component={ About }/>
                <Route path="/lastfm" component={ Lastfm } />
              </Switch>
            </CSSTransitionGroup>
          )}/>

        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    response: state.response
  };
}

export default connect(mapStateToProps)(App);
