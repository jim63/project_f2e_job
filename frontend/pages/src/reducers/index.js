import { combineReducers } from 'redux';

const yourator = (yjobs = '', action = '') => {
  if (action.type === 'FETCH_YOURATOR') {
    console.log(action.type, action.payload);

    return action.payload;
  }
  return yjobs;
};

const current_page = (page = 1, action = '') => {
  if (action.type === 'CHANGE_PAGE') {
    return action.payload;
  }
  return page;
};

export default combineReducers({
  yourator: yourator,
  current_page: current_page
});
