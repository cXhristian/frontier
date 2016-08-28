import React from 'react';
import { connect } from 'react-redux';
import { resizeArticle } from '../actionCreators';
import DragArticle from './DragArticle';
import Article from '../components/Article';
import Resizable from 'react-resizable-box';
import { MAX_WIDTH, MIN_HEIGHT, MIN_WIDTH } from '../constants/layout';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.editMode = true;
    this.grid = [16, 16];
    if(this.props.align === 'left') {
      this.resizableDirections = { right: true, bottom: true, bottomRight: true };
    }
    else {
      this.resizableDirections = { left: true, bottom: true, bottomLeft: true };
    }
    this.onResizeStop = this.onResizeStop.bind(this);
  }
  onResizeStop(direction, styleSize, clientSize, delta) {
    const { width, height } = styleSize;
    const { dispatch, id } = this.props;
    dispatch(resizeArticle(id, width, height));
  }

  editComponent() {
    const { width, height } = this.props;
    return (
      <Resizable onResizeStop={ this.onResizeStop }
        isResizable={ this.resizableDirections }
        grid={ this.grid } width={ width } height={ height }
        minWidth={ MIN_WIDTH } minHeight={ MIN_HEIGHT }
        maxWidth={ MAX_WIDTH } >
        <DragArticle { ...this.props } />
      </Resizable>
    );
  }

  viewComponent() {
    const { width, height } = this.props;
    return (
      <div style={ { width, height} }>
        <Article { ...this.props } />
      </div>
    );
  }

  render() {
    return this.editMode ? this.editComponent() : this.viewComponent();
  }
}

export default connect()(ArticleContainer);
