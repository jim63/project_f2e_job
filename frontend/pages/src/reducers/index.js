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

const banner_status = (status = 2, action = '') => {
  if (action.type === 'CHANGE_BANNER') {
    status++;
    return status % 3;
  } else if (action.type === 'CHANGE_BANNER_DEFAULT') {
    return 2;
  }
  return status;
};

const favo_job = (job = '', action = '') => {
  if (action.type === 'UPDATE_FAVO') {
    return action.payload;
  }
  return job;
};

const detail = (detail = '', action = '') => {
  if (action.type === 'UPDATE_DETAIL') {
    return action.payload;
  }
  return detail;
};

const login_prompt = (status = 'none', action = '') => {
  if (action.type === 'CHANGE_PROMPT_STATUS') {
    return action.payload;
  }
  return status;
};

export default combineReducers({
  jobs: jobs,
  user_status: user_status,
  banner_status: banner_status,
  favo_job: favo_job,
  detail: detail,
  login_prompt: login_prompt
});
