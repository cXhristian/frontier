import { combineReducers } from 'redux';
import articles from './articles';
import articleGroups from './articleGroups';
import groupOrder from './groupOrder';

export default combineReducers({
  articles, articleGroups, groupOrder
});
