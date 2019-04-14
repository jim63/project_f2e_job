import axios from 'axios';

export const fetch_yourator = page => async dispatch => {
  const response = await axios.get(`http://localhost:3306/yourator?page=${page}`).then(e => {
    return e.data;
  });

  dispatch({ type: 'FETCH_YOURATOR', payload: response });
};
