import React, { PropTypes} from 'react';

const ArticleTitle = ({ text }) => {
  return (
    <h3 className="Article-title">{ text }</h3>
  )
}

ArticleTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default ArticleTitle;
