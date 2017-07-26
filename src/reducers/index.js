import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import menu from './menu';
import { onError, fetchStatus, askLastFm } from './responses';

const rootReducer = combineReducers({
  onError,
  fetchStatus,
  askLastFm,
  menu,
  routing
});

export default rootReducer;
