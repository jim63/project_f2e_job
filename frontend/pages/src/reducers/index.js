import { combineReducers } from 'redux';

const yourator = (yjobs = '', action = '') => {
  if (action.type === 'FETCH_YOURATOR') {
    console.log(action.type, action.payload);

    return action.payload;
  }
  return yjobs;
};

export default combineReducers({
  yourator: yourator
});
