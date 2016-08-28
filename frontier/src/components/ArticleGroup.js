import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ArticleContainer from '../containers/ArticleContainer';
import { ArticlePropTypes } from '../constants/PropTypes';
import '../css/ArticleGroup.css';

const ArticleGroup = ({ align, articles, groupId }) => {
  const articleGroupClass = classNames('ArticleGroup', {
    [`ArticleGroup--align-${align}`]:  align !== undefined
  })
  return (
    <div className={ articleGroupClass }>
    {
      articles.map((article, i) => (
        <div key={ i } className="Article-wrapper">
          <ArticleContainer groupId={ groupId }
            index={ i } { ...article } align={ align } />
        </div>
      ))
    }
    </div>
  );
}

ArticleGroup.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  articles: PropTypes.arrayOf(PropTypes.shape(ArticlePropTypes)).isRequired,
  groupId: PropTypes.number.isRequired
}

export default ArticleGroup;
