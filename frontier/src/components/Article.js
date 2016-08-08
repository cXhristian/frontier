import React from 'react'
import { ArticlePropTypes } from '../constants/PropTypes';
import articleImage from '../images/article.jpg';
import '../css/Article.css';

const Article = ({ title }) => (
  <div className="Article">
    <div className="Article-image" >
      <img src={ articleImage } alt="" />
    </div>
    <h3 className="Article-title">{ title }</h3>
  </div>
);

Article.propTypes = ArticlePropTypes;

export default Article;
