import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

// Enable Redux DevTools
const enhancers = compose(
  window.devToolsExtension ?
  window.devToolsExtension() :
  f => f
);

// Right now, only for testing purposes
const initialState = {
  test_reducer: {
    klick: 100
  }
};

const store = createStore(rootReducer, initialState, enhancers);

export default store;
