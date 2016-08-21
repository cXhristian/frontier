import { EDIT_TITLE, RESIZE_ARTICLE } from '../actions';

const article = (state = {}, action) => {
  switch (action.type) {
    case RESIZE_ARTICLE:
      const { height, width } = action.payload;
      return Object.assign({}, state, {
        width, height
      })
    case EDIT_TITLE: {
      const { title } = action.payload;
      return Object.assign({}, state, {
        title
      });
    }
    default:
      return state;
  }
}

const articles = (state = {}, action) => {
  switch(action.type) {
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
