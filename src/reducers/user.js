import { RECEIVE_LOGIN, RECEIVE_LOGOUT } from '../actions/auth';

const user = (state = {
  data: '',
  isAuthenticated: false,
}, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      return {
        data: action.user,
        isAuthenticated: true,
      }
    case RECEIVE_LOGOUT:
      return {
        data: {},
        isAuthenticated: false
      }
    default:
      return state;
  }
};

export default user;
