import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import test_reducer from './test_reducer';

const rootReducer = combineReducers({
  test_reducer,
  routing
});

export default rootReducer;
