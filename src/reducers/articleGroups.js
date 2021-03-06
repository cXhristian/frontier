import { MOVE_ARTICLE, ADD_ARTICLE_TO_GROUP, NEW_ARTICLE_GROUP, DELETE_ARTICLE_GROUP, DELETE_ARTICLE_FROM_GROUP, TOGGLE_ALIGN } from '../actions';
import { addToArray, removeFromArray } from '../utils';

const articleGroup = (state = {}, action) => {
  switch (action.type) {
    case MOVE_ARTICLE: {
      const { articleId, index: newIndex, fromGroup, toGroup } = action.payload;
      let { articles } = state;
      if(state.id === fromGroup) {
        const currentIndex = articles.indexOf(articleId);
        articles = removeFromArray(articles, currentIndex);
      }
      if(state.id === toGroup) {
        articles = addToArray(articles, newIndex, articleId);
      }
      state = Object.assign({}, state, {
        articles: articles
      });
      return state;
    }

    case ADD_ARTICLE_TO_GROUP: {
      // TODO: Consider merging MOVE_ARTICLE and ADD_ARTICLE_TO_GROUP
      const { articleId, fromGroup, toGroup } = action.payload;
      let { articles } = state;
      if(state.id === fromGroup) {
        const currentIndex = articles.indexOf(articleId);
        articles = removeFromArray(articles, currentIndex);
      }
      if(state.id === toGroup) {
        articles = addToArray(articles, articles.length, articleId);
      }
      state = Object.assign({}, state, {
        articles: articles
      });
      return state;
    }

    case DELETE_ARTICLE_FROM_GROUP: {
      const articleIndex = state.articles.indexOf(action.payload.articleId);
      return Object.assign({}, state, {
        articles: removeFromArray(state.articles, articleIndex)
      });
    }

    case TOGGLE_ALIGN: {
      return Object.assign({}, state, {
        align: state.align === 'left' ? 'right' : 'left'
      });
    }

    default:
      return state;
  }
};

const articleGroups = (state = {}, action) => {
  switch(action.type) {
    case NEW_ARTICLE_GROUP: {
      const groupId = action.payload.groupId
      const align = action.payload.align
      const newArticleGroup = {
        id: groupId,
        articles: [],
        align
      }
      return Object.assign({}, state, {
        [groupId]: newArticleGroup
      });
    }

    case MOVE_ARTICLE:
    case ADD_ARTICLE_TO_GROUP: {
      const { fromGroup, toGroup } = action.payload;
      if( fromGroup === -1 ){
        return Object.assign({}, state, {
          [toGroup]: articleGroup(state[toGroup], action)
        });
      }
      return Object.assign({}, state, {
        [fromGroup]: articleGroup(state[fromGroup], action),
        [toGroup]: articleGroup(state[toGroup], action)
      });
    }

    case TOGGLE_ALIGN:
    case DELETE_ARTICLE_FROM_GROUP: {
      const { groupId } = action.payload;
      return Object.assign({}, state, {
        [groupId]: articleGroup(state[groupId], action)
      });
    }

    case DELETE_ARTICLE_GROUP: {
      const deleteId = action.payload.groupId;
      // Deletes object key
      state = Object.keys(state).reduce((result, key) => {
        if(key !== String(deleteId)) {
          result[key] = state[key];
        }
        return result
      }, {});
      return state;
    }

    default:
      return state;
  }
};

export default articleGroups;
