import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import files from './files';
import labels from './labels';
import posts from './posts';

const rootReducer = combineReducers({
  user,
  flash,
  files,
  labels,
  posts,
});

export default rootReducer;
