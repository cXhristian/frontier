import { MOVE_ARTICLE, ADD_ARTICLE_TO_GROUP } from '../actions';

const removeFromArticles = (articles, index) => {
  return [
    ...articles.slice(0, index),
    ...articles.slice(index + 1)
  ];
};

const addToArticles = (articles, index, articleId) => {
  return [
    ...articles.slice(0, index),
    articleId,
    ...articles.slice(index)
  ];
}

const articleGroup = (state = {}, action) => {
  switch (action.type) {
    case MOVE_ARTICLE: {
      const { id: articleId, index: newIndex, fromGroup, toGroup } = action.payload;
      let { articles } = state;
      if(state.id === fromGroup) {
        const currentIndex = articles.indexOf(articleId);
        articles = removeFromArticles(articles, currentIndex);
      }
      if(state.id === toGroup) {
        articles = addToArticles(articles, newIndex, articleId);
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
        articles = removeFromArticles(articles, currentIndex);
      }
      if(state.id === toGroup) {
        articles = addToArticles(articles, articles.length, articleId);
      }
      state = Object.assign({}, state, {
        articles: articles
      });
      return state;
    }
    default:
    return state;
  }
};

const articleGroups = (state = {}, action) => {
  switch(action.type) {
    case MOVE_ARTICLE:
    case ADD_ARTICLE_TO_GROUP:
      const { fromGroup, toGroup } = action.payload;
      return Object.assign({}, state, {
        [fromGroup]: articleGroup(state[fromGroup], action),
        [toGroup]: articleGroup(state[toGroup], action)
      });
    default:
      return state;
  }
};

export default articleGroups;
