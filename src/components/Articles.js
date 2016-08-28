import React, { PropTypes } from 'react';
import ArticleGroupContainer from '../containers/ArticleGroupContainer';
import '../css/Articles.css';

const Articles = ({ articleGroups }) => {
  return (
    <section className="Articles">
      {
        articleGroups.map( (groupId, index) => (
          <ArticleGroupContainer key={ groupId } id={ groupId } index={ index } />
        ))
      }
    </section>
  );
};

Articles.propTypes = {
  articleGroups: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Articles;
