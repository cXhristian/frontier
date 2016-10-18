import { MOVE_ARTICLE_GROUP, DELETE_ARTICLE_GROUP, NEW_ARTICLE_GROUP, TOGGLE_ALIGN } from '../actions';

export const moveArticleGroup = (groupId, toIndex) => ({
  type: MOVE_ARTICLE_GROUP,
  payload: { groupId, toIndex }
});

export const deleteArticleGroup = (groupId) => ({
  type: DELETE_ARTICLE_GROUP,
  payload: { groupId }
});

export const newArticleGroup = (groupId, index, align) => ({
  type: NEW_ARTICLE_GROUP,
  payload: { groupId, index, align }
});

export const toggleAlign = (groupId) => ({
  type: TOGGLE_ALIGN,
  payload: { groupId }
});
