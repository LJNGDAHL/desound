import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

// These are needed for Redux
import * as actionsCreators from './actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import store from './store';

function mapStateToProps(state) {
  return {
    klick: state.klick
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

/*
 * Takes the App component, add all of the props in mapStateToProps,
 * and all of the actionsCreators in mapDispatchToProps.
 */
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={ store }><ConnectedApp/></Provider>,
  document.getElementById('root')
);

registerServiceWorker();
