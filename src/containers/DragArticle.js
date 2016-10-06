import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import classNames from 'classnames';
import Icon from '../components/Icon';
import { moveArticle, deleteArticleFromGroup } from '../actionCreators';
import * as ItemTypes from '../constants/ItemTypes';
import Article from '../components/Article';


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
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const collectSource = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteArticleFromGroup: () => {
      dispatch(deleteArticleFromGroup(props.id , props.groupId))
    }
  }
}

class DragArticle extends Component {
  render() {
    const { connectDragSource, connectDragPreview, connectDropTarget, isDragging, isOver, deleteArticleFromGroup } = this.props;
    const dragClass = classNames({
      'Article-draggable': true,
      'Article--dragging': isDragging,
      'Article--over': isOver
    })
    return connectDropTarget(connectDragPreview(
      <div className={ dragClass } >
        { connectDragSource(<span><Icon className="Article-draggable-icon" name="arrows" /></span>) }
        <Icon className="Article-delete-icon" size="1x" name="trash" onClick={deleteArticleFromGroup} />
        <Article { ...this.props } />
      </div>
    ))
  }
}

// eslint-disable-next-line
DragArticle = DropTarget(ItemTypes.ARTICLE, articleTarget, collectTarget)(DragArticle);
// eslint-disable-next-line
DragArticle = DragSource(ItemTypes.ARTICLE, articleSource, collectSource)(DragArticle);
export default connect(null,mapDispatchToProps)(DragArticle);
