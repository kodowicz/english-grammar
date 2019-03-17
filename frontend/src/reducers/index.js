import { combineReducers } from 'redux';

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

const isChecked = (state = false, action) => {
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
  topicId: topicSelected,
  isOpen: isMenuOpen,
  isChecked: isChecked,
  isStartPage: isStartPage
});
