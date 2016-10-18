import { MOVE_ARTICLE_GROUP, NEW_ARTICLE_GROUP, DELETE_ARTICLE_GROUP } from '../actions';
import { addToArray, removeFromArray } from '../utils';

const groupsOrder = (state = [], action) => {
  switch(action.type) {
    case NEW_ARTICLE_GROUP: {
      const { groupId, index} = action.payload;
      return addToArray(state, index, groupId);
    }

    case MOVE_ARTICLE_GROUP: {
      const { groupId, toIndex } = action.payload;
      const fromIndex = state.indexOf(groupId);
      state = removeFromArray(state, fromIndex);
      return addToArray(state, toIndex, groupId);
    }

    case DELETE_ARTICLE_GROUP: {
      const groupId = action.payload.groupId;
      const index = state.indexOf(groupId);
      return removeFromArray(state, index);
    }

    default:
      return state;
  }
};

export default groupsOrder;
