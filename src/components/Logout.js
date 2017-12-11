/* jshint esversion: 6 */
import React, { Component, PropTypes } from 'react'
import handleLogin from '../actions/auth'

class Logout extends Component {
  componentDidMount=() => {
    dispatch(handleLogin())
  }

  render () {
    return (
      <h1 className='loading-text'>
        Logging out...
      </h1>
    )
  }
}

Logout.propTypes = {
  router: PropTypes.object.isRequired
}

export default Logout
