import React from 'react';
import ArticleGroupContainer from '../containers/ArticleGroupContainer';
import '../css/Articles.css';

const Articles = ({ articleGroups }) => {
  return (
    <section className="Articles">
      {
        articleGroups.map(groupId => (
          <ArticleGroupContainer key={ groupId } id={ groupId } />
        ))
      }
    </section>
  );
};

export default Articles;
