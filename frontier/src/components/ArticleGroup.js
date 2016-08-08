import React from 'react';
import ArticleContainer from '../containers/ArticleContainer';
import '../css/ArticleGroup.css';

const ArticleGroup = ({ articles, groupId }) => {
  return (
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
};

export default ArticleGroup;
