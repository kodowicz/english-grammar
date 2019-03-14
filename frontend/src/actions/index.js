export const fetchTitles = () => async dispatch => {
  fetch('http://localhost:5000/api/topics')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_TITLES',
      payload: data
    }))
}

export const fetchSentences = number => async dispatch => {
  fetch(`http://localhost:5000/api/search/${number}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_SENTENCES',
      payload: data
    }))
}
