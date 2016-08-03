import { RESIZE_ARTICLE } from '../actions';

export const resizeArticle = (id, width, height) => {
  return {
    type: RESIZE_ARTICLE,
    payload: {
      id, width, height
    }
  }
}
