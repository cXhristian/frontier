import { MOVE_ARTICLE, ADD_ARTICLE_TO_GROUP } from '../actions';

const removeFromGroup = (state, articleId, groupId) => {
  const currentIndex = state.get(String(groupId)).indexOf(articleId);
  return state.update(String(groupId), list => {
    return list.delete(currentIndex);
  });
};

const articleGroups = (state = {}, action) => {
  let fromGroup;
  let toGroup;
  switch(action.type) {
    case MOVE_ARTICLE:
      const { id, index: newIndex } = action.payload;
      fromGroup = action.payload.fromGroup;
      toGroup = action.payload.toGroup;
      state = removeFromGroup(state, id, fromGroup);
      state = state.update(String(toGroup), list => {
        return list.insert(newIndex, id);
      });
      return state;
    case ADD_ARTICLE_TO_GROUP:
      const { articleId } = action.payload;
      fromGroup = action.payload.fromGroup;
      toGroup = action.payload.toGroup;
      if(fromGroup) {
        state = removeFromGroup(state, articleId, fromGroup);
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
