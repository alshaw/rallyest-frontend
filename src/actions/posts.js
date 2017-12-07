import { setFlash } from './flash';
import axios from 'axios';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
const requestPosts = () => {
  return {
    type: LOAD_POSTS_REQUEST
  }
}

export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
const receivePosts = (json) => {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts: json.included,
    receivedAt: Date.now()
  }
}

export const getPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts())
    return axios.get('/api/posts')
      .then(res => JSON.parse(res.data.res), error => console.log(error))
      .then(json => dispatch(receivePosts(json)))  
  }
}

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST_SUCCESS,
    id: id
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/posts/${id}`)
      .then(res => dispatch(deletePostSuccess(id)), error => console.log(error))
  }
}