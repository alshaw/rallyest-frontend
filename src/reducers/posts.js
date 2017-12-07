import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  DELETE_POST_SUCCESS,
} from '../actions/posts';

const posts = (
  state = {
    isFetching: false,
    posts: [],
    open: false,
    fileId: ''
  },
  action,
) => {
  switch(action.type) {
    case LOAD_POSTS_REQUEST:
      return { ...state, isFetching: true }
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
        lastUpdated: action.receivedAt
      }
    case DELETE_POST_SUCCESS:
      return { ...state, posts: state.posts.filter(post => post.id !== action.id )}
    default:
      return state;
  }
}

export default posts;