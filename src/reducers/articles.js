import { EDIT_TITLE, RESIZE_ARTICLE, CROP_IMAGE } from '../actions';

const article = (state = {}, action) => {
  switch (action.type) {
    case CROP_IMAGE: {
      const { width, height, top, left } = action.payload.cropData;
      return Object.assign({}, state, {
        imageWidth: width,
        imageHeight: height,
        imageOffsetX: left,
        imageOffsetY: top
      });
    }
    case RESIZE_ARTICLE:
      const { height, width } = action.payload;
      return Object.assign({}, state, {
        width, height
      })
    case EDIT_TITLE: {
      const { title, fontSize } = action.payload;
      return Object.assign({}, state, {
        title, fontSize
      });
    }
    default:
      return state;
  }
}

const articles = (state = {}, action) => {
  switch(action.type) {
    case CROP_IMAGE:
    case RESIZE_ARTICLE:
    case EDIT_TITLE: {
      const { id } = action.payload;
      if(state[id] === undefined) {
        return state;
      }
      return Object.assign({}, state, {
        [id]: article(state[id], action)
      });
    }
    default:
      return state;
  }
}

export default articles;
