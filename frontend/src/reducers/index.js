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
}

export default combineReducers({
  titles: titlesFetched
});
