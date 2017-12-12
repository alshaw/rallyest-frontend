import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import files from './files'
import labels from './labels'
import posts from './posts'
import letters from './letters'

const rootReducer = combineReducers({
  user,
  flash,
  files,
  labels,
  posts,
  letters
})

export default rootReducer
