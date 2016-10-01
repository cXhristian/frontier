import { EDIT_TITLE, MOVE_ARTICLE, RESIZE_ARTICLE, ADD_ARTICLE_TO_GROUP, CROP_IMAGE, DELETE_ARTICLE_FROM_GROUP } from '../actions';

export const resizeArticle = (id, width, height) => {
  return {
    type: RESIZE_ARTICLE,
    payload: {
      id, width, height
    }
  }
}

export const editTitle = (id, title, fontSize) => {
  return {
    type: EDIT_TITLE,
    payload: {
      id, title, fontSize
    }
  };
};

export const moveArticle = (id, fromGroup, toGroup, index) => {
  return {
    type: MOVE_ARTICLE,
    payload: {
      id, fromGroup, toGroup, index
    }
  }
}

export const addArticleToGroup = (articleId, toGroup, fromGroup = null) => {
  return {
    type: ADD_ARTICLE_TO_GROUP,
    payload: {
      articleId, toGroup, fromGroup
    }
  }
};

export const deleteArticleFromGroup = (articleId, groupId) => {
  return {
    type: DELETE_ARTICLE_FROM_GROUP,
    payload: {
      articleId, groupId
    }
  }
}

export const cropArticleImage = (id, cropData) => {
  return {
    type: CROP_IMAGE,
    payload: { id, cropData }
  };
};
