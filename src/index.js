import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';
import initialState from './fixtures/articles';
import createLogger from 'redux-logger';
import './css/index.css';
import './css/Grid.css';
import '../node_modules/font-awesome/css/font-awesome.css';

const logger = createLogger();
const store = createStore(reducers, initialState, applyMiddleware(logger));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
  Disable selecting of elements:
  If an article is selected by accident (happens a lot simply by clicking)
  the article will be dragged instead of resized which looks odd and feels buggy
*/
document.onselectstart = function() {
  return false;
}
