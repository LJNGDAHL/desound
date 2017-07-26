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
  // Earlier, I've been using response for storing both error messages and the
  // response from Last.fm. Is this still a good idea?
  response: {
    fetchCompleted: undefined,
    fetchInitialized: undefined,
    fetchPending: undefined,
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
