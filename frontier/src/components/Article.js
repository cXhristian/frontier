import React from 'react'
import { ArticlePropTypes } from '../constants/PropTypes';
import EditArticleTitle from '../containers/EditArticleTitle';
import articleImage from '../images/article.jpg';
import '../css/Article.css';

const Article = ({ id, title, fontSize }) => (
  <div className="Article">
    <div className="Article-image" >
      <img src={ articleImage } alt="" />
    </div>
    <EditArticleTitle id={ id } text={ title } fontSize={ fontSize } />
  </div>
);

Article.propTypes = ArticlePropTypes;

export default Article;
