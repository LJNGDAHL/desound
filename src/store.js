import { createStore, compose } from 'redux';
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
  }
};

const store = createStore(rootReducer, initialState, enhancers);

export default store;
