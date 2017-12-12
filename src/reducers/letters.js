import { RECEIVE_LETTERS, REQUEST_LETTERS } from '../actions/letters'

const letters = (
  state = {
    letters: [],
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case REQUEST_LETTERS:
      return { ...state, isFetching: true }
    case RECEIVE_LETTERS:
      return { ...state, letters: action.letters }
    default:
      return state
  }
}

export default letters
