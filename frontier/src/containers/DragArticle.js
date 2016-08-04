import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import { moveArticle } from '../actionCreators';
import * as ItemTypes from '../constants/ItemTypes';

const articleSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      groupId: props.groupId
    }
  }
};

const articleTarget = {
  hover(props, monitor, component) {
    const { id: draggedId, groupId: fromGroup } = monitor.getItem();
    const { id: hoverId, groupId: toGroup, index, dispatch } = props;
    if(draggedId !== hoverId) {
      dispatch(moveArticle(draggedId, fromGroup, toGroup, index));
    }
  }
}

const collectTarget = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const collectSource = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  }
}

class DragArticle extends Component {
  render() {
    const { connectDragSource, connectDropTarget } = this.props;
    return connectDropTarget(connectDragSource(
      <div className="Article-draggable">
        { this.props.children }
      </div>
    ))
  }
}

DragArticle = DropTarget(ItemTypes.ARTICLE, articleTarget, collectTarget)(DragArticle);
DragArticle = DragSource(ItemTypes.ARTICLE, articleSource, collectSource)(DragArticle);
export default connect()(DragArticle);
