import { EDIT_TITLE, MOVE_ARTICLE, RESIZE_ARTICLE, ADD_ARTICLE_TO_GROUP, CROP_IMAGE, DELETE_ARTICLE_FROM_GROUP } from '../actions';

export const resizeArticle = (id, width, height) => ({
  type: RESIZE_ARTICLE,
  payload: { id, width, height }
});

export const editTitle = (id, title, fontSize) => ({
  type: EDIT_TITLE,
  payload: { id, title, fontSize }
});

export const moveArticle = (id, fromGroup, toGroup, index) => ({
  type: MOVE_ARTICLE,
  payload: { id, fromGroup, toGroup, index }
});

export const addArticleToGroup = (articleId, toGroup, fromGroup = null) => ({
  type: ADD_ARTICLE_TO_GROUP,
  payload: { articleId, toGroup, fromGroup }
});

export const deleteArticleFromGroup = (articleId, groupId) => ({
  type: DELETE_ARTICLE_FROM_GROUP,
  payload: { articleId, groupId }
});

export const cropArticleImage = (id, cropData) => ({
  type: CROP_IMAGE,
  payload: { id, cropData }
});
