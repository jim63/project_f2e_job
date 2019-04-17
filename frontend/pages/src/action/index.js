import axios from 'axios';

export const fetch_yourator = page => async dispatch => {
  const response = await axios.get(`http://localhost:3306/yourator?page=${page}`).then(e => {
    console.log('wwwww', e.data);
    return {
      website: 'yourator',
      job_list: e.data.jobs,
      total_page: e.data.totalPage,
      current_page: 1
    };
  });

  dispatch({ type: 'FETCH_YOURATOR', payload: response });
};

export const fetch_104 = page => async dispatch => {
  const response = await axios.get(`http://localhost:3306/104?page=${page}`).then(e => {
    console.log('wwwww', e.data);
    return { website: '104', job_list: e.data.jobs, total_page: e.data.totalPage };
    // return e.data.jobs;
  });

  dispatch({ type: 'FETCH_104', payload: response });
};
