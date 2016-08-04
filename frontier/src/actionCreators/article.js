import { MOVE_ARTICLE, RESIZE_ARTICLE } from '../actions';

export const resizeArticle = (id, width, height) => {
  return {
    type: RESIZE_ARTICLE,
    payload: {
      id, width, height
    }
  }
}

export const moveArticle = (id, fromGroup, toGroup, index) => {
  return {
    type: MOVE_ARTICLE,
    payload: {
      id, fromGroup, toGroup, index
    }
  }
}
