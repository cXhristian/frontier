import React, { PropTypes} from 'react';

const ArticleTitle = ({ text, fontSize }) => {
  return (
    <h3 style={{ fontSize: `${fontSize}px` }} className="Article-title">{ text }</h3>
  )
}

ArticleTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default ArticleTitle;
