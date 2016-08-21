import { MOVE_ARTICLE_GROUP } from '../actions';

const groupsOrder = (state = [], action) => {
  switch(action.type){
    case MOVE_ARTICLE_GROUP:
      const id = action.payload.id;
      const fromIndex = state.indexOf(id)
      const toIndex = action.payload.toIndex;
      state = [...state] // Create new object
      state.splice(fromIndex, 1);
      state.splice(toIndex, 0, id);
      return state;
    default:
      return state;
  }
};

export default groupsOrder;
