import React from 'react';
import Resizable from 'react-resizable-box';
import Article from '../components/Article';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.grid = [16, 16];
    this.onResizeStop = this.onResizeStop.bind(this);
  }
  onResizeStop(direction, styleSize, clientSize, delta) {
    console.log(direction, styleSize, clientSize, delta);
  }
  render() {
    const { height, width } = this.props;
    return (
      <Resizable onResizeStop={ this.onResizeStop }
        isResizable={ { right: true, bottom: true, bottomRight: true } }
        grid={ this.grid } height={ height } width={ width } customClass="Article-wrapper">
          <Article { ...this.props } />
      </Resizable>
    )
  }
}

export default ArticleContainer;
