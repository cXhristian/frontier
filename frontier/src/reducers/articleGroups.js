import { MOVE_ARTICLE } from '../actions';

const articleGroups = (state = {}, action) => {
  switch(action.type) {
    case MOVE_ARTICLE:
      const { id, fromGroup, toGroup, index: newIndex } = action.payload;
      const currentIndex = state.get(String(fromGroup)).indexOf(id);
      state = state.update(String(fromGroup), list => {
        return list.delete(currentIndex);
      });
      state = state.update(String(toGroup), list => {
        return list.insert(newIndex, id);
      });
      return state;
    default:
      return state;
  }
};

export default articleGroups;
