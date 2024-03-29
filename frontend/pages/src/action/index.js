import axios from 'axios';
// import { log } from 'util';

export const fetch_jobs = ({ page, source, keyword = '' }) => async dispatch => {
  if (page === 'pending') {
    dispatch({ type: 'FETCH_JOBDATA', payload: { source: source, job_list: '', total_page: 1, current_page: page || 1 } });
  } else {
    if (source === 'yourator') {
      const response = await axios
        // .get(`http://localhost:80/yourator?page=${page}`, { withCredentials: true })
        .get(`/yourator?page=${page}`, { withCredentials: true })
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
      // const response = await axios.get(`http://localhost:80/104?page=${page}`, { withCredentials: true }).then(e => {
      const response = await axios.get(`/104?page=${page}`, { withCredentials: true }).then(e => {
        return {
          source: '104',
          job_list: e.data.jobs,
          total_page: e.data.totalPage,
          current_page: page || 1
        };
      });
      dispatch({ type: 'FETCH_JOBDATA', payload: response });
    } else if (source === 'meetjobs') {
      // const response = await axios.get(`http://localhost:80/meetjobs?page=${page}`, { withCredentials: true }).then(e => {
      const response = await axios.get(`/meetjobs?page=${page}`, { withCredentials: true }).then(e => {
        return {
          source: 'meetjobs',
          job_list: e.data.jobs,
          total_page: e.data.totalPage,
          current_page: page || 1
        };
      });
      dispatch({ type: 'FETCH_JOBDATA', payload: response });
    } else if (source === 'search') {
      // const response = await axios.get(`http://localhost:80/search?keyword=${keyword}`, { withCredentials: true }).then(e => {
      const response = await axios.get(`/search?keyword=${keyword}`, { withCredentials: true }).then(e => {
        return {
          source: 'search',
          job_list: e.data.data,
          total_page: e.data.totalPage || 1,
          current_page: page || 1
        };
      });
      dispatch({ type: 'FETCH_JOBDATA', payload: response });
    }
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

export const change_banner_default = () => {
  return { type: 'CHANGE_BANNER_DEFAULT' };
};

export const update_favo = obj => {
  return { type: 'UPDATE_FAVO', payload: obj };
};

export const update_detail = obj => {
  return { type: 'UPDATE_DETAIL', payload: obj };
};

export const change_login_prompt_status = obj => {
  return { type: 'CHANGE_PROMPT_STATUS', payload: obj };
};
