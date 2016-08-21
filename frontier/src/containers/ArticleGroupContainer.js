import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as ItemTypes from '../constants/ItemTypes';
import ArticleGroup from '../components/ArticleGroup';
import { addArticleToGroup } from '../actionCreators';

const groupTarget = {
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

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true })
  }
}

class ArticleGroupContainer extends Component {
  render() {
    const { connectDropTarget, isOver } = this.props;
    const groupClass = classNames({
      'ArticleGroup--over': isOver
    })
    return connectDropTarget(
      <div className={ groupClass }>
        <ArticleGroup { ...this.props } />
      </div>
    );
  }
}

const mapStateToProps = ({ articles, articleGroups }, { id }) => {
  const articlesInGroup = articleGroups.get(String(id))
    .map(articleId => articles[articleId]).toJS();
  return {
    groupId: id,
    articles: articlesInGroup
  };
}

// eslint-disable-next-line
ArticleGroupContainer = DropTarget(ItemTypes.ARTICLE, groupTarget, collect)(ArticleGroupContainer);
export default connect(mapStateToProps)(ArticleGroupContainer);
