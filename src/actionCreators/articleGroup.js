import { MOVE_ARTICLE_GROUP, DELETE_ARTICLE_GROUP, NEW_ARTICLE_GROUP, TOGGLE_ALIGN } from '../actions';

export const moveArticleGroup = (id, toIndex) => {
  return {
    type: MOVE_ARTICLE_GROUP,
    payload: {
      id, toIndex
    }
  }
}

export const deleteArticleGroup = (id) => {
    return {
        type: DELETE_ARTICLE_GROUP,
        payload: {
            id
        }
    }
}

export const newArticleGroup = (id, index, align) => {
    return {
        type: NEW_ARTICLE_GROUP,
        payload: {
            id,
            index,
            align
        }
    }
}

export const toggleAlign = (groupId) => ({
  type: TOGGLE_ALIGN,
  payload: { groupId }
});
