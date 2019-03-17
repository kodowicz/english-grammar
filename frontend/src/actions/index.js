import axios from 'axios';

export const fetchTitles = () => async dispatch => {
  const response = await axios.get('http://localhost:5000/api/topics');
  dispatch({
    type: 'FETCH_TITLES',
    payload: response.data
  })
};

export const fetchSentences = number => async dispatch => {
  const response = await axios.get('http://localhost:5000/api/search', {
    params: { query: number }
  });

  dispatch({
    type: 'FETCH_SENTENCES',
    payload: response.data
  })
};

export const selectTopic = id => ({
  type: 'TOPIC_SELECTED',
  id
});

export const handleMenu = () => ({
  type: 'HANDLE_MENU'
});

export const handleCheck = (input) => ({
  type: 'HANDLE_CHECK',
  value: input
});

export const closeStartPage = () => ({
  type: 'CLOSE_START_PAGE',
  payload: false
});
