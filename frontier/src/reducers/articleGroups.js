import { MOVE_ARTICLE } from '../actions';

const articleGroups = (state = {}, action) => {
  switch(action.type) {
    case MOVE_ARTICLE:
      const { id, fromGroup, toGroup, index} = action.payload;
      const currentIndex = state[fromGroup].indexOf(id);
      // TODO: Less naive approach
      state[fromGroup].splice(currentIndex, 1);
      state[toGroup].splice(index, 0, id);
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default articleGroups;
