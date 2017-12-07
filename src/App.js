import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Flash from './Flash'
import DashboardLayout from './Layouts/DashboardLayout'
import LoginLayout from './Layouts/LoginLayout'

import store from '../store'
import { setFlash } from '../actions/flash'
import { connect } from 'react-redux'

import NoMatch from './NoMatch'
import UserFeed from './UserFeed'
import Files from './Files/Files'
import Photos from './Photos/Photos'
import Letters from './Letters'
import Goals from './Goals'
import Courses from './Courses'
import Announcements from './Announcements'
import Updates from './Updates'
import Assignments from './Assignments'
import Community from './Community'
import Settings from './Settings'

import Login from './NoAuth/Login'
import Page1 from './NoAuth/Page1'
import Page2 from './NoAuth/Page2'
import Page3 from './NoAuth/Page3'

const flash = () => {
  store.dispatch(setFlash('Login to continue', 'red'))
}

const DashboardRoute = ({component: Component, ...rest, user}) => {
  if (!user.isAuthenticated) {
    return (
      <div>
        {flash()}
        <Redirect to='/' />
      </div>
    )
  } else {
    return (
      <Route {...rest} render={matchProps => (
        <DashboardLayout>
          <div>
            <div>
              <Flash />
            </div>
            <Component {...matchProps} />
          </div>
        </DashboardLayout>
      )} />
    )
  }
}
const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column'
          }}>

          <div>
            <Flash />
          </div>

          <div>
            <Component {...matchProps} />
          </div>

        </div>
      </LoginLayout>
    )} />

  )
}

class App extends Component {
  render () {
    const { user } = this.props
    return (
      <Router>
        <Switch>
          <LoginLayoutRoute exact path='/' component={Login} />
          <LoginLayoutRoute path='/login' component={Login} />
          <LoginLayoutRoute path='/Tour_1' component={Page1} />
          <LoginLayoutRoute path='/Tour_2' component={Page2} />
          <LoginLayoutRoute path='/Tour_3' component={Page3} />
          <DashboardRoute exact path='/Feed' component={UserFeed} user={user} />
          <DashboardRoute path='/Files' component={Files} user={user} />
          <DashboardRoute path='/Photos' component={Photos} user={user} />
          <DashboardRoute path='/Letters' component={Letters} user={user} />
          <DashboardRoute path='/Goals' component={Goals} user={user} />
          <DashboardRoute path='/Courses' component={Courses} user={user} />
          <DashboardRoute path='/Announcements' component={Announcements} user={user} />
          <DashboardRoute path='/Updates' component={Updates} user={user} />
          <DashboardRoute path='/Assignments' component={Assignments} user={user} />
          <DashboardRoute path='/Community' component={Community} user={user} />
          <DashboardRoute path='/Settings' component={Settings} user={user} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App)
