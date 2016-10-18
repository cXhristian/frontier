import { EDIT_TITLE, MOVE_ARTICLE, RESIZE_ARTICLE, ADD_ARTICLE_TO_GROUP, CROP_IMAGE, DELETE_ARTICLE_FROM_GROUP } from '../actions';

export const resizeArticle = (articleId, width, height) => ({
  type: RESIZE_ARTICLE,
  payload: { articleId, width, height }
});

export const editTitle = (articleId, title, fontSize) => ({
  type: EDIT_TITLE,
  payload: { articleId, title, fontSize }
});

export const moveArticle = (articleId, fromGroup, toGroup, index) => ({
  type: MOVE_ARTICLE,
  payload: { articleId, fromGroup, toGroup, index }
});

export const addArticleToGroup = (articleId, toGroup, fromGroup = null) => ({
  type: ADD_ARTICLE_TO_GROUP,
  payload: { articleId, toGroup, fromGroup }
});

export const deleteArticleFromGroup = (articleId, groupId) => ({
  type: DELETE_ARTICLE_FROM_GROUP,
  payload: { articleId, groupId }
});

export const cropArticleImage = (articleId, cropData) => ({
  type: CROP_IMAGE,
  payload: { articleId, cropData }
});
