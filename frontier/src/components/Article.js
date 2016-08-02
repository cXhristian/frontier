import React, { PropTypes } from 'react';
import Resizable from 'react-resizable-box';
import articleImage from '../images/article.jpg';
import '../css/Article.css';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.grid = [16, 16];
    this.onResizeStop = this.onResizeStop.bind(this);
  }
  onResizeStop(direction, styleSize, clientSize, delta) {
    console.log(direction, styleSize, clientSize, delta);
  }
  render() {
    const { height, width, title } = this.props;
    return (
      <Resizable onResizeStop={ this.onResizeStop }
        isResizable={ { right: true, bottom: true, bottomRight: true } }
        grid={ this.grid } height={ height } width={ width } customClass="Article">
          <div className="Article-image" >
            <img src={ articleImage } alt="" />
          </div>
          <h3 className="Article-title">{ title }</h3>
      </Resizable>
    )
  }
}

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Article;
