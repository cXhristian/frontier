import React from 'react';
import Article from './Article';
import ArticleGroup from './ArticleGroup';
import '../css/Articles.css';

const Articles = ({ articleGroups }) => {
  return (
    <section className="Articles">
      {
        articleGroups.map((articles, i) => (
          <ArticleGroup key={ i }>
            {
              articles.map((article, i) => (
                <Article key={ i } { ...article } />
              ))
            }
          </ArticleGroup>
        ))
      }
    </section>
  );
};

Articles.propTypes = {
  articles: React.PropTypes.arrayOf(
    React.PropTypes.shape(Article.propTypes)
  )
};

export default Articles;
