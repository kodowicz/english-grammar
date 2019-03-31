import { combineReducers } from 'redux';

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

const titlesFetched = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TITLES':
      return action.payload;
    default:
      return state
  }
};

const sentencesFetched = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SENTENCES':
      return action.payload;
    default:
      return state
  }
};

const refresh = (state = true, action) => {
  switch (action.type) {
    case 'REFRESH_PAGE':
      return action.isRefreshed;
    default:
      return state
  }
};

const topicChanged = (state = true, action) => {
  switch (action.type) {
    case 'CHANGE_TOPIC':
      return action.isChanged;
    default:
      return state
  }
};

const examplesFetched = (state = examples, action) => {
  switch (action.type) {
    case 'FETCH_EXAMPLES':
      return action.payload;
    default:
      return state
  }
};

const topicSelected = (state = null, action) => {
  switch (action.type) {
    case 'TOPIC_SELECTED':
      return action.id;
    default:
      return state
  }
};

const isMenuOpen = (state = false, action) => {
  switch (action.type) {
    case 'HANDLE_MENU':
      return !state;
    default:
      return state
  }
};

const userAnswer = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_CHECK':
      return action.value;
    default:
      return state
  }
};

const isStartPage = (state = true, action) => {
  switch (action.type) {
    case 'CLOSE_START_PAGE':
      return action.payload;
    default:
      return state
  }
};


export default combineReducers({
  titles: titlesFetched,
  sentences: sentencesFetched,
  refresh: refresh,
  topicChanged: topicChanged,
  examples: examplesFetched,
  topicId: topicSelected,
  isOpen: isMenuOpen,
  userAnswer: userAnswer,
  isStartPage: isStartPage
});
