import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import classNames from 'classnames';
import { moveArticle } from '../actionCreators';
import * as ItemTypes from '../constants/ItemTypes';

const articleSource = {
  beginDrag(props) {
    return {
      id: props.id,
      groupId: props.groupId
    }
  }
};

const articleTarget = {
  drop(props, monitor, component) {
    const { id: draggedId, groupId: fromGroup } = monitor.getItem();
    const { id: hoverId, groupId: toGroup, index, dispatch } = props;
    if(draggedId === hoverId) {
      return;
    }

    dispatch(moveArticle(draggedId, fromGroup, toGroup, index ));
    monitor.getItem().groupId = toGroup;
  }
}

const collectTarget = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const collectSource = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class DragArticle extends Component {
  render() {
    const { connectDragSource, connectDropTarget, isDragging } = this.props;
    const dragClass = classNames({
      'Article-draggable': true,
      'Article--dragging': isDragging
    })
    return connectDropTarget(connectDragSource(
      <div className={ dragClass } >
        { this.props.children }
      </div>
    ))
  }
}

// eslint-disable-next-line
DragArticle = DropTarget(ItemTypes.ARTICLE, articleTarget, collectTarget)(DragArticle);
// eslint-disable-next-line
DragArticle = DragSource(ItemTypes.ARTICLE, articleSource, collectSource)(DragArticle);
export default connect()(DragArticle);
