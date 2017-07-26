import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import menu from './menu';
import response from './response';

const rootReducer = combineReducers({
  menu,
  response,
  routing
});

export default rootReducer;
