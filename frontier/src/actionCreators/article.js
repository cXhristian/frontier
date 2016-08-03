import { RESIZE_ARTICLE } from '../actions';

export const resizeArticle = (id, height, width) => {
  return {
    type: RESIZE_ARTICLE,
    payload: {
      id, height, width
    }
  }
}
