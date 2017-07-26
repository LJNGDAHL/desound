import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

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

  onError: {
    error: false,
    message: null
  }
};

const store = createStore(
  rootReducer, // All of the reducers
  initialState, // The initial state of the app
  // All the other stuff that is needed
  compose(
    applyMiddleware(thunk),
    enhancers
  )
);

export default store;
