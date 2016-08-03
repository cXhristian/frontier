import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleGroup from '../components/ArticleGroup';
import Article from '../components/Article';

class ArticleGroupContainer extends Component {
  render() {
    return (
      <ArticleGroup>
        {
          this.props.articles.map((article, i) => (
            <Article key={ i } { ...article } />
          ))
        }
      </ArticleGroup>
    );
  }
}

const mapStateToProps = ({ articles, articleGroups }, { id }) => {
  return {
    articles: articleGroups[id].map(articleId => articles[articleId])
  };
}

export default connect(mapStateToProps)(ArticleGroupContainer);
