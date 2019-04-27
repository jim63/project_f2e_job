import axios from 'axios';
// import { log } from 'util';

export const fetch_jobs = ({ page, source }) => async dispatch => {
  if (source === 'yourator') {
    const response = await axios
      .get(`http://3.18.93.25:3006/yourator?page=${page}`, { withCredentials: true })
      .then(e => {
        return {
          source: 'yourator',
          job_list: e.data.jobs,
          total_page: e.data.totalPage,
          current_page: page || 1
        };
      });
    dispatch({ type: 'FETCH_JOBDATA', payload: response });
  } else if (source === '104') {
    // const response = await axios.get(`http://localhost:3006/104?page=${page}`, { withCredentials: true }).then(e => {
    const response = await axios.get(`http://3.18.93.25:3006/104?page=${page}`, { withCredentials: true }).then(e => {
      return {
        source: '104',
        job_list: e.data.jobs,
        total_page: e.data.totalPage,
        current_page: page || 1
      };
    });
    dispatch({ type: 'FETCH_JOBDATA', payload: response });
  } else if (source === 'meetjobs') {
    const response = await axios
      .get(`http://3.18.93.25:3006/meetjobs?page=${page}`, { withCredentials: true })
      .then(e => {
        return {
          source: 'meetjobs',
          job_list: e.data.jobs,
          total_page: e.data.totalPage,
          current_page: page || 1
        };
      });
    dispatch({ type: 'FETCH_JOBDATA', payload: response });
  }
};

export const login_success = () => {
  return { type: 'LOGIN_SUCCESS' };
};

export const login_check_success = obj => {
  return { type: 'LOGIN_CHECK_SUCCESS', payload: obj };
};

export const login_check_fail = () => {
  return { type: 'INITIAL_CHECK_FAIL' };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const remove_favo = obj => {
  return { type: 'REMOVE_FAVO', payload: obj };
};

export const add_favo = obj => {
  return { type: 'ADD_FAVO', payload: obj };
};

export const change_banner = () => {
  return { type: 'CHANGE_BANNER' };
};

export const update_favo = obj => {
  return { type: 'UPDATE_FAVO', payload: obj };
};
