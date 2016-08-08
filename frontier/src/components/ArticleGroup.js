import React, { PropTypes } from 'react';
import ArticleContainer from '../containers/ArticleContainer';
import { ArticlePropTypes } from '../constants/PropTypes';
import '../css/ArticleGroup.css';

const ArticleGroup = ({ articles, groupId }) => (
  <div className="ArticleGroup">
  {
    articles.map((article, i) => (
      <div key={ i } className="Article-wrapper">
        <ArticleContainer groupId={ groupId }
          index={ i } { ...article } />
      </div>
    ))
  }
  </div>
);

ArticleGroup.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(ArticlePropTypes)).isRequired,
  groupId: PropTypes.number.isRequired
}

export default ArticleGroup;
