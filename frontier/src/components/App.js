import React, { Component } from 'react';
import ArticlesContainer from '../containers/ArticlesContainer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Frontier</h2>
        </div>
        <ArticlesContainer />
      </div>
    );
  }
}

export default App;
