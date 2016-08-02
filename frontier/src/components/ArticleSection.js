import React from 'react';
import '../css/ArticleSection.css';

const ArticleSection = ({ children }) => {
  return (
    <div className="ArticleSection">
      { children }
    </div>
  );
};

export default ArticleSection;
