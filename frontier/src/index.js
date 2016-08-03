import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';
import initialState from './fixtures/articles.json';
import './css/index.css';
import './css/Grid.css';

const store = createStore(reducers, initialState);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
