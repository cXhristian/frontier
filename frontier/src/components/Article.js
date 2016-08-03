import React, { PropTypes } from 'react'
import articleImage from '../images/article.jpg';
import '../css/Article.css';

const Article = ({ title }) => {
  return (
    <div className="Article">
      <div className="Article-image" >
        <img src={ articleImage } alt="" />
      </div>
      <h3 className="Article-title">{ title }</h3>
    </div>
  );
};

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Article;
