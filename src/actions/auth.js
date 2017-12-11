/* jshint esversion: 6 */
import React from 'react'
import axios from 'axios'
import { setFlash } from '../actions/flash'
import { setHeaders } from '../actions/headers'


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
        delete sessionStorage.token
        delete sessionStorage.refresh_token
        dispatch(setFlash('Logged out successfully!', 'green'))
        dispatch(receiveLogout())
        window.location = '/'
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Failed to logout', 'red'))
      })
  }
};

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
const receiveLogin = (res) => {
  return {
    type: RECEIVE_LOGIN,
    user: res
  }
}

export const handleLogin = (email, password, history) => {
  return (dispatch) => {
    axios.post('/api/logins', { email, password })
      .then(res => {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('refresh_token', res.data.refresh_token)
        dispatch(receiveLogin(res))
        history.push('/Feed')
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Invalid Email/Password', 'red'))
      })
  }
}
