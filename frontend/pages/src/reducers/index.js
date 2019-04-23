import { combineReducers } from 'redux';

const jobs = (
  jobs_data = {
    source: '',
    job_list: '',
    total_page: '',
    current_page: 1
  },
  action = ''
) => {
  if (action.type === 'FETCH_JOBDATA') {
    return action.payload;
  }
  if (action.type === 'CHANGE_PAGE') {
    return action.payload;
  }

  return jobs_data;
};

const user_status = (status = { status: 'unknown' }, action = '') => {
  if (action.type === 'INITIAL_CHECK_LOGIN_STATUS') {
  } else if (action.type === 'LOGIN_CHECK_SUCCESS') {
    return action.payload;
  } else if (action.type === 'LOGIN_CHECK_FAIL') {
    return { status: 'unknown' };
  } else if (action.type === 'LOGOUT') {
    return { status: 'unknown' };
  } else if (action.type === 'ADD_FAVO') {
    let all_favo = action.payload;
    return { ...status, favorite_job: action.payload };
  } else if (action.type === 'REMOVE_FAVO') {
    let all_favo = action.payload;
    return { ...status, favorite_job: action.payload };
  }

  return status;
};

const banner_status = (status = 1, action = '') => {
  if (action.type === 'CHANGE_BANNER') {
    status++;
    return status % 2;
  }

  return status;
};

export default combineReducers({
  jobs: jobs,
  user_status: user_status
});
