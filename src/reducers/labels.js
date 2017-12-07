import {
  LOAD_LABELS_REQUEST,
  LOAD_LABELS_SUCCESS,
} from '../actions/labels';

const labels = (
  state = {
    isFetching: false,
    labels: []
  },
  action
) => {
  switch(action.type) {
    case LOAD_LABELS_REQUEST:
      return { ...state, isFetching: true }
    case LOAD_LABELS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        labels: action.labels,
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
}

export default labels;