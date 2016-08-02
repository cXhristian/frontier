import React from 'react';
import '../css/Article.css';

const Article = ({ title, image, width }) => {
  return (
    <article className={ `Article Grid-${width}` }>
      <img className="Article-image" src={ image } alt="" />
      <h3 className="Article-title">{ title }</h3>
    </article>
  )
};

Article.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired
};

export default Article;
