import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Used when querying Last.fm
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

// Enable Redux DevTools
const enhancers = compose(
  window.devToolsExtension ?
  window.devToolsExtension() :
  f => f
);

const initialState = {
  menu: {
    open: false
  },

  // Keeps track of response status from Last.fm
  fetchStatus: {
    initialized: false,
    pending: false,
    completed: false
  },

  askLastFm: {
    artist: '',
    baseURL: `${API_PREFIX}http://ws.audioscrobbler.com/2.0/?format=json`,
    limit: 12,
    method: 'getsimilar'
  },

  onError: {
    error: false,
    message: null
  }
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    enhancers
  )
);

console.log(store.getState());

export default store;
