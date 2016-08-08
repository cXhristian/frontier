import { MOVE_ARTICLE, ADD_ARTICLE_TO_GROUP } from '../actions';

const articleGroups = (state = {}, action) => {
  let fromGroup;
  let toGroup;
  switch(action.type) {
    case MOVE_ARTICLE:
      const { id, index: newIndex } = action.payload;
      fromGroup = action.payload.fromGroup;
      toGroup = action.payload.toGroup;
      const currentIndex = state.get(String(fromGroup)).indexOf(id);
      state = state.update(String(fromGroup), list => {
        return list.delete(currentIndex);
      });
      state = state.update(String(toGroup), list => {
        return list.insert(newIndex, id);
      });
      return state;
    case ADD_ARTICLE_TO_GROUP:
      const { articleId } = action.payload;
      fromGroup = action.payload.fromGroup;
      toGroup = action.payload.toGroup;
      if(fromGroup) {
        const currentIndex = state.get(String(fromGroup)).indexOf(articleId);
        state = state.update(String(fromGroup), list => {
          return list.delete(currentIndex);
        });
      }
      state = state.update(String(toGroup), list => {
        return list.push(articleId);
      });
      return state;
    default:
      return state;
  }
};

export default articleGroups;
