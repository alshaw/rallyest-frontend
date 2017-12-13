import axios from 'axios'

export const REQUEST_LETTERS = 'REQUEST_LETTERS'
function requestLetters () {
  return {
    type: REQUEST_LETTERS
  }
}

export const RECEIVE_LETTERS = 'RECEIVE_LETTERS'
function receiveLetters (json) {
  return {
    type: RECEIVE_LETTERS,
    letters: json
  }
}

export function getLetters () {
  return (dispatch) => {
    dispatch(requestLetters())
    return axios.get('/api/letters')
      .then(res => JSON.parse(res.data.res))
      .then(json => dispatch(receiveLetters(json)))
      .catch(err => console.log(err))
  }
}
