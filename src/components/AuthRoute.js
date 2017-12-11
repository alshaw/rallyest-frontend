/* jshint esversion: 6 */
import React, { Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        authenticated === true
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
      )}
    />
  )
}

const mapStateToProps = state => {
  const { authenticated } = state
  return { authenticated }
}

export default connect(mapStateToProps)(AuthRoute)
