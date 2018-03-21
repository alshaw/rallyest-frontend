import axios from 'axios'
import { setFlash } from '../actions/flash'
import Cookies from 'js-cookie'

export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT'
const receiveLogout = () => {
  return {
    type: RECEIVE_LOGIN
  }
}

// Handling logout with third-party api
// export const handleLogout = () => {
//   return (dispatch) => {
//     axios.delete('/api/logins/1')
//       .then(res => {
//         Cookies.remove('authenticated')
//         Cookies.remove('token')
//         dispatch(setFlash('Logged out successfully!', 'green'))
//         dispatch(receiveLogout())
//         window.location = '/'
//       })
//       .catch(res => {
//         console.log(res)
//         dispatch(setFlash('Failed to logout', 'red'))
//       })
//   }
// }

// Simple logout for sample
export const handleLogout = () => {
  return (dispatch) => {
    dispatch(setFlash('Logout successful', 'green'))
    window.location = '/'
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
      .then(res => {
        Cookies.set('token', res.data.token)
        Cookies.set('authenticated', true)
        dispatch(receiveLogin(res))
      })
      .then(history => dispatch(getSession(history)))
      .catch(res => {
        Cookies.set('token', res.data.token)
        Cookies.set('authenticated', true)
        dispatch(receiveLogin(res))
      })
  }
}

// export const handleLogin = (email, password, history) => {
//   return (dispatch) => {
//     return axios.post('/api/logins', { email, password })
//       .then(res => {
//         dispatch(getSession())
//         dispatch(receiveLogin(res))
//         dispatch(setFlash('Successfully logged in', 'green'))
//       })
//       .then(e => history.push("/Feed")
//       .catch(res => {
//         console.log(res)
//         dispatch(setFlash('Invalid Email/Password', 'red'))
//       })
//     }

const getSession = () => {
  return (dispatch) => {
    return axios.get('/api/session')
      .then(res => dispatch(receiveSession(res)))
      .then(res => {
        dispatch(setFlash('Successfully logged in', 'green'))
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
