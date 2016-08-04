import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';
import initialState from './fixtures/articles';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import './css/index.css';
import './css/Grid.css';

// HACK: Only articleGroups is using Immutable atm
initialState.articleGroups = Immutable.fromJS(initialState.articleGroups);

const logger = createLogger();
const store = createStore(reducers, initialState, applyMiddleware(logger));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
