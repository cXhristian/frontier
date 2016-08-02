import React, { Component } from 'react';
import Articles from './Articles';
import articleGroups from '../fixtures/articles.json';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Frontier</h2>
        </div>
        <Articles articleGroups={ articleGroups } />
      </div>
    );
  }
}

export default App;
