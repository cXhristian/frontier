import React, { Component } from 'react';
import Articles from './Articles';
import articleImage from '../images/article.jpg';
import '../css/App.css';

const articles = [];
for(let i = 0; i < 10; i++) {
  articles.push({
    title: `Article ${i + 1}`,
    image: articleImage,
    width: 6
  });
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Frontier</h2>
        </div>
        <Articles articles={ articles } />
      </div>
    );
  }
}

export default App;
