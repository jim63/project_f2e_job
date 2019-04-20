import axios from 'axios';
import { log } from 'util';

export const fetch_jobs = ({ page, source }) => async dispatch => {
  if (source === 'yourator') {
    const response = await axios.get(`http://localhost:3306/yourator?page=${page}`).then(e => {
      return {
        source: 'yourator',
        job_list: e.data.jobs,
        total_page: e.data.totalPage,
        current_page: page || 1
      };
    });
    dispatch({ type: 'FETCH_JOBDATA', payload: response });
  } else if (source === '104') {
    dispatch({
      type: 'FETCH_JOBDATA',
      payload: {
        source: '104',
        // job_list: e.data.jobs,
        job_list: '',
        total_page: '',
        current_page: page || 2
      }
    });
  }

  // if (source === '104') {
  //   const response = await axios.get(`http://localhost:3306/104?page=${page}`).then(e => {
  //     return {
  //       website: 'yourator',
  //       job_list: e.data.jobs,
  //       total_page: e.data.totalPage,
  //       current_page: 1
  //     };
  //   });
  //   dispatch({ type: 'FETCH_JOBDATA', payload: response });
  // }
};
