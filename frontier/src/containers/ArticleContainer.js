import React from 'react';
import { connect } from 'react-redux';
import { resizeArticle } from '../actionCreators';
import DragArticle from './DragArticle';
import Resizable from 'react-resizable-box';
import Article from '../components/Article';

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
    const { width, height, id, groupId, index } = this.props;
    return (
      <Resizable onResizeStop={ this.onResizeStop }
        isResizable={ this.resizableDirections }
        grid={ this.grid } width={ width } height={ height }>
        <DragArticle id={ id } index={ index } groupId={ groupId } >
          <Article { ...this.props } />
        </DragArticle>
      </Resizable>
    )
  }
}

export default connect()(ArticleContainer);
