import React from 'react'
import { ArticlePropTypes } from '../constants/PropTypes';
import EditArticleTitle from '../containers/EditArticleTitle';
import ArticleImage from './ArticleImage';
import articleImageUrl from '../images/article.jpg';
import '../css/Article.css';

const Article = (props) => {
  const { id, title, fontSize } = props;
  return (
    <div className="Article">
      <ArticleImage { ...props } url={ articleImageUrl } />
      <EditArticleTitle id={ id } text={ title } fontSize={ fontSize } />
    </div>
  );
};

Article.propTypes = ArticlePropTypes;

export default Article;
