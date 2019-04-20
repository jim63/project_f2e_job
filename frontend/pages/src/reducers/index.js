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

const login_status = (status = 0, action = '') => {
  //! status: 0 for not login, 1 for login
  if (action.type === 'LOGIN_SUCCESS') {
    status = 1;
  } else if (action.type === 'LOGIN_FAIL') {
    status = 0;
  }
  return status;
};

export default combineReducers({
  jobs: jobs,
  login_status: login_status
});
