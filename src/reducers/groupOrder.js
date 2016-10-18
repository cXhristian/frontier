import { MOVE_ARTICLE_GROUP, NEW_ARTICLE_GROUP, DELETE_ARTICLE_GROUP } from '../actions';

const groupsOrder = (state = [], action) => {
  switch(action.type){

    case NEW_ARTICLE_GROUP:{
      const groupId = action.payload.groupId;
      const index = action.payload.index;
      state = [...state];
      state.splice(index, 0, groupId)
      return state
    }

    case MOVE_ARTICLE_GROUP:{
      const groupId = action.payload.groupId;
      const fromIndex = state.indexOf(groupId);
      const toIndex = action.payload.toIndex;
      state = [...state]; // Create new object
      state.splice(fromIndex, 1);
      state.splice(toIndex, 0, groupId);
      return state;
    }

    case DELETE_ARTICLE_GROUP:{
      const groupId = action.payload.groupId;
      const index = state.indexOf(groupId);
      state = [...state];
      state.splice(index, 1);
      return state;
    }


    default:
      return state;
  }
};

export default groupsOrder;
