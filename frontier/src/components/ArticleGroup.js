import React from 'react';
import '../css/ArticleGroup.css';

const ArticleGroup = ({ children }) => {
  return (
    <div className="ArticleGroup">
      { children }
    </div>
  );
};

export default ArticleGroup;
