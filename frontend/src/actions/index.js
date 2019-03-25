import axios from 'axios';

const allExamples = [
  { id: 7, examples: [] },
  { id: 9, examples: [] },
  { id: 19, examples: [] },
  { id: 20, examples: [] },
  { id: 21, examples: [] },
  { id: 22, examples: [] },
  { id: 23, examples: [] },
  { id: 24, examples: [] },
  { id: 25, examples: [] },
  { id: 26, examples: [] },
  { id: 41, examples: [] },
  { id: 64, examples: [] },
  { id: 73, examples: [] },
  { id: 81, examples: [] }
]

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

export const refreshPage = isRefreshed => ({
  type: 'REFRESH_PAGE',
  isRefreshed
});

export const fetchAllExamples = () => dispatch => {
  const response = JSON.parse(window.localStorage.getItem('allExamples')) || allExamples;
  window.localStorage.setItem('allExamples', JSON.stringify(allExamples));

  dispatch({
    type: 'FETCH_ALL_EXAMPLES',
    payload: response
  })
};

// export const fetchExamples = number => async dispatch => {
//   const response = await JSON.parse(window.localStorage.getItem(number));
//
//   dispatch({
//     type: 'FETCH_EXAMPLES',
//     payload: response
//   })
// };

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
