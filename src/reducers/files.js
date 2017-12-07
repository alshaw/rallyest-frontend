import { 
  LOAD_FILES_REQUEST,
  LOAD_FILES_SUCCESS,
  DELETE_FILE_SUCCESS,
  TOGGLE_ACCORDION_ON,
  TOGGLE_ACCORDION_OFF,
} from '../actions/files';

const files = (
  state = {
    isFetching: false,
    files: [],
    open: false, 
    fileId: '',
    active: 1,
  }, 
  action,
) => {
  switch(action.type) {
    case LOAD_FILES_REQUEST:
      return { ...state, isFetching: true }
    case LOAD_FILES_SUCCESS:
      return {
         ...state, 
         files: action.files, 
         isFetching: false, 
         lastUpdated: action.receivedAt 
        }
    case DELETE_FILE_SUCCESS:
      return { ...state, files: state.files.filter(file => file.id !== action.id )}
    case TOGGLE_ACCORDION_ON:
      return { ...state, active: action.active }
    case TOGGLE_ACCORDION_OFF:
      return { ...state, active: action.active }
    default:
      return state;
  }
}

export default files;