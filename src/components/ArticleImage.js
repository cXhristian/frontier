import React, { PropTypes } from 'react';
import '../css/ArticleImage.css';

const ArticleImage = (props) => {
  let style = {};
  if(props.imageWidth !== undefined) {
    style = {
      width: props.imageWidth,
      height: props.imageHeight,
      marginLeft: props.imageOffsetX,
      marginTop: props.imageOffsetY
    };
  }
  return (
    <div className="ArticleImage">
      <img style={ style } src={ props.url } alt="" />
    </div>
  );
}

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  imageOffsetY: PropTypes.number,
  imageOffsetX: PropTypes.number
}

export default ArticleImage;
