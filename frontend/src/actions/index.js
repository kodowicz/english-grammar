import axios from 'axios';

const examples = [
  { id: 7, examples: [], all: 59 },
  { id: 9, examples: [], all: 39 },
  { id: 19, examples: [], all: 19 },
  { id: 20, examples: [], all: 30 },
  { id: 21, examples: [], all: 84 },
  { id: 22, examples: [], all: 59 },
  { id: 23, examples: [], all: 27 },
  { id: 24, examples: [], all: 38 },
  { id: 25, examples: [], all: 48 },
  { id: 26, examples: [], all: 45 },
  { id: 29, examples: [], all: 35 },
  { id: 41, examples: [], all: 1 },
  { id: 64, examples: [], all: 65 },
  { id: 73, examples: [], all: 43 },
  { id: 81, examples: [], all: 52 }
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

export const changeTopic = (isChanged) => ({
  type: 'CHANGE_TOPIC',
  isChanged
})

export const fetchExamples = () => dispatch => {
  const response = JSON.parse(window.localStorage.getItem('allExamples')) || examples;

  dispatch({
    type: 'FETCH_EXAMPLES',
    payload: response
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
