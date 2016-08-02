import React from 'react';
import '../css/Article.css';
import Resizable from 'react-resizable-box';

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
    const { height, width, image, title } = this.props;
    return (
      <Resizable onResizeStop={ this.onResizeStop }
        isResizable={ { right: true, bottom: true, bottomRight: true } }
        grid={ this.grid } height={ height } width={ width } customClass="Article">
          <div className="Article-image" >
            <img src={ image } alt="" />
          </div>
          <h3 className="Article-title">{ title }</h3>
      </Resizable>
    )
  }
}

Article.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired
};

export default Article;
