import { combineReducers } from 'redux';

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
}

const allExamplesFetched = (state = allExamples, action) => {
  switch (action.type) {
    case 'FETCH_ALL_EXAMPLES':
      return action.payload;
    default:
      return state
  }
}

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
}

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
  allExamples: allExamplesFetched,
  topicId: topicSelected,
  isOpen: isMenuOpen,
  userAnswer: userAnswer,
  isStartPage: isStartPage
});
