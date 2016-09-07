import { MOVE_ARTICLE_GROUP, NEW_ARTICLE_GROUP, DELETE_ARTICLE_GROUP } from '../actions';

const groupsOrder = (state = [], action) => {
  switch(action.type){

    case NEW_ARTICLE_GROUP:{
      const id = action.payload.id;
      const index = action.payload.index;
      state = [...state];
      state.splice(index, 0, id)
      return state
    }

    case MOVE_ARTICLE_GROUP:{
      const id = action.payload.id;
      const fromIndex = state.indexOf(id);
      const toIndex = action.payload.toIndex;
      state = [...state]; // Create new object
      state.splice(fromIndex, 1);
      state.splice(toIndex, 0, id);
      return state;
    }

    case DELETE_ARTICLE_GROUP:{
      const id = action.payload.id;
      const index = state.indexOf(id);
      state = [...state];
      state.splice(index, 1);
      return state;
    }


    default:
      return state;
  }
};

export default groupsOrder;
