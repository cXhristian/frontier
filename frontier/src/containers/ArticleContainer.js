import React from 'react';
import { connect } from 'react-redux';
import { resizeArticle } from '../actionCreators';
import DragArticle from './DragArticle';
import Resizable from 'react-resizable-box';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.grid = [16, 16];
    this.resizableDirections = { right: true, bottom: true, bottomRight: true };
    this.onResizeStop = this.onResizeStop.bind(this);
  }
  onResizeStop(direction, styleSize, clientSize, delta) {
    const { width, height } = styleSize;
    const { dispatch, id } = this.props;
    dispatch(resizeArticle(id, width, height));
  }

  render() {
    const { width, height } = this.props;
    return (
      <Resizable onResizeStop={ this.onResizeStop }
        isResizable={ this.resizableDirections }
        grid={ this.grid } width={ width } height={ height }>
        <DragArticle { ...this.props } />
      </Resizable>
    )
  }
}

export default connect()(ArticleContainer);
