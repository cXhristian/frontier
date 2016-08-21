import { MOVE_ARTICLE_GROUP } from '../actions';

export const moveArticleGroup = (id, toIndex) => {
  return {
    type: MOVE_ARTICLE_GROUP,
    payload: {
      id, toIndex
    }
  }
}
