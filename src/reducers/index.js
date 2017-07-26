import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import menu from './menu';
import { onError, fetchStatus } from './responses';

const rootReducer = combineReducers({
  onError,
  fetchStatus,
  menu,
  routing
});

export default rootReducer;
