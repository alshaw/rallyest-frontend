import axios from 'axios'

export const LOAD_LABELS_REQUEST = 'LOAD_LABELS_REQUEST'
const requestLabels = () => {
  return {
    type: LOAD_LABELS_REQUEST
  }
}

export const LOAD_LABELS_SUCCESS = 'LOAD_LABELS_SUCCESS'
const receiveLabels = (json) => {
  return {
    type: LOAD_LABELS_SUCCESS,
    labels: json.data.labels.data,
    receivedAt: Date.now()
  }
}

export const getLabels = () => {
  return (dispatch) => {
    dispatch(requestLabels())
    return axios.get('/api/labels')
      .then(json => dispatch(receiveLabels(json)))
  }
}
