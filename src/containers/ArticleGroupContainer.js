import React, { Component } from 'react';
import { DropTarget, DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as ItemTypes from '../constants/ItemTypes';
import ArticleGroup from '../components/ArticleGroup';
import { addArticleToGroup, moveArticleGroup } from '../actionCreators';
import { findDOMNode } from 'react-dom';

const articleTarget = {
  drop(props, monitor, component) {
    const hasDroppedOnChild = monitor.didDrop();
    if(hasDroppedOnChild) {
      return;
    }
    const { dispatch, groupId: toGroup } = props;
    const { id: articleId, groupId: fromGroup } = monitor.getItem();
    dispatch(addArticleToGroup(articleId, toGroup, fromGroup));
  }
}

const articleGroupSource = {
  beginDrag(props) {
    return {
      groupId: props.id,
      index: props.index
    };
  }
}

const articleGroupTarget = {
  hover(props, monitor, component){
    const { index:dragIndex, groupId: dragId } = monitor.getItem();
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.dispatch(moveArticleGroup(dragId, hoverIndex));

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
}

const collectArticleTarget = (connect, monitor) => {
  return {
    connectArticleDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true })
  }
}

const collectArticleGroupSource = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const collectArticleGroupTarget = (connect, monitor) => {
  return {
    connectArticleGroupDropTarget: connect.dropTarget()
  }
}

class ArticleGroupContainer extends Component {
  render() {
    const { connectArticleDropTarget, connectArticleGroupDropTarget,
       connectDragSource, connectDragPreview, isOver } = this.props;
    const groupClass = classNames('ArticleGroup-wrapper', {
      'ArticleGroup--over': isOver
    })
    return connectArticleGroupDropTarget(connectArticleDropTarget(connectDragPreview(
      <div className={ groupClass }>
        { connectDragSource(<div className="ArticleGroup-handlebar"></div>) }
        <ArticleGroup { ...this.props } />
      </div>
    )));
  }
}

const mapStateToProps = ({ articles, articleGroups }, { id }) => {
  const articlesInGroup = articleGroups[id].articles
    .map(articleId => articles[articleId]);
  return {
    align: articleGroups[id].align,
    groupId: id,
    articles: articlesInGroup
  };
}

// eslint-disable-next-line new-cap
ArticleGroupContainer = DropTarget(ItemTypes.ARTICLE, articleTarget, collectArticleTarget)(ArticleGroupContainer);
// eslint-disable-next-line new-cap
ArticleGroupContainer = DragSource(ItemTypes.ARTICLE_GROUP_CONTAINER, articleGroupSource, collectArticleGroupSource)(ArticleGroupContainer);
// eslint-disable-next-line new-cap
ArticleGroupContainer = DropTarget(ItemTypes.ARTICLE_GROUP_CONTAINER, articleGroupTarget, collectArticleGroupTarget)(ArticleGroupContainer);


export default connect(mapStateToProps)(ArticleGroupContainer);
