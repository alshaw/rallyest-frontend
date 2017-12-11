import axios from 'axios'
import { setFlash } from '../actions/flash'

export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT'
const receiveLogout = () => {
  return {
    type: RECEIVE_LOGIN
  }
}

export const handleLogout = () => {
  return (dispatch) => {
    axios.delete('/api/logins/1')
      .then(res => {
        delete window.sessionStorage.token
        delete window.sessionStorage.refresh_token
        dispatch(setFlash('Logged out successfully!', 'green'))
        dispatch(receiveLogout())
        window.location = '/'
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Failed to logout', 'red'))
      })
  }
}

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
const receiveLogin = (res) => {
  return {
    type: RECEIVE_LOGIN,
    user: res
  }
}

export const handleLogin = (email, password) => {
  return (dispatch) => {
    return axios.post('/api/logins', { email, password })
      .then(res => dispatch(receiveLogin(res)))
      .then(history => dispatch(getSession()))
      .catch(err => {
        console.log(err)
        dispatch(setFlash('Invalid Email/Password', 'red'))
      })
  }
}

const getSession = () => {
  return (dispatch) => {
    return axios.get('/api/session')
      .then(res => dispatch(receiveSession(res)))
      .then(res => {
        window.location = '/Feed'
      })
  }
}

export const RECEIVE_SESSION_ID = 'RECEIVE_SESSION_ID'
const receiveSession = (res) => {
  let session = JSON.parse(res.data.res)
  return {
    type: RECEIVE_SESSION_ID,
    id: session.data.id
  }
}
