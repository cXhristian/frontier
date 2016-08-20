import { EDIT_TITLE, MOVE_ARTICLE, RESIZE_ARTICLE, ADD_ARTICLE_TO_GROUP } from '../actions';

export const resizeArticle = (id, width, height) => {
  return {
    type: RESIZE_ARTICLE,
    payload: {
      id, width, height
    }
  }
}

export const editTitle = (id, title) => {
  return {
    type: EDIT_TITLE,
    payload: {
      id, title
    }
  };
};

export const moveArticle = (id, fromGroup, toGroup, index) => {
  return {
    type: MOVE_ARTICLE,
    payload: {
      id, fromGroup, toGroup, index
    }
  }
}

export const addArticleToGroup = (articleId, toGroup, fromGroup = null) => {
  return {
    type: ADD_ARTICLE_TO_GROUP,
    payload: {
      articleId, toGroup, fromGroup
    }
  }
};
