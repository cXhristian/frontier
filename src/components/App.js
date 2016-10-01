import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ArticlesContainer from '../containers/ArticlesContainer';
import SidebarContainer from '../containers/SidebarContainer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Frontier</h2>
        </div>
        <SidebarContainer />
        <ArticlesContainer />
      </div>
    );
  }
}

// eslint-disable-next-line
export default DragDropContext(HTML5Backend)(App);
