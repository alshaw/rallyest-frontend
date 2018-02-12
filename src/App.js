import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'

import Flash from './components/Flash'
import DashboardLayout from './components/Layouts/DashboardLayout'
import LoginLayout from './components/Layouts/LoginLayout'
import store from './store'
import { setFlash } from './actions/flash'
import Announcements from './pages/Announcements'
import Assignments from './pages/Assignments'
import Community from './pages/Community'
import Courses from './pages/Courses'
import Files from './pages/files/Files'
import Goals from './pages/Goals'
import Letters from './pages/letters/Letters'
import NoMatch from './pages/NoMatch'
import Photos from './pages/photos/Photos'
import Settings from './pages/Settings'
import Updates from './pages/Updates'
import UserFeed from './pages/user-feed/UserFeed'
import Login from './pages/no-auth/Login'
import Page1 from './pages/no-auth/Page1'
import Page2 from './pages/no-auth/Page2'
import Page3 from './pages/no-auth/Page3'

const flash = () => {
  store.dispatch(setFlash('Login to continue', 'red'))
}

const DashboardRoute = ({ component: Component, ...rest }) => {
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

export default class App extends Component {
  render () {
    const authenticated = Cookies.get('authenticated')

    return (
      <Router>
        <Switch>
          <LoginLayoutRoute exact path='/' component={Login} />
          <LoginLayoutRoute path='/login' component={Login} />
          <LoginLayoutRoute path='/Tour_1' component={Page1} />
          <LoginLayoutRoute path='/Tour_2' component={Page2} />
          <LoginLayoutRoute path='/Tour_3' component={Page3} />
          <DashboardRoute  path='/Feed' component={UserFeed} />
          <DashboardRoute path='/Files' component={Files} />
          <DashboardRoute path='/Photos' component={Photos} />
          <DashboardRoute path='/Letters' component={Letters}/>
          <DashboardRoute path='/Goals' component={Goals}/>
          <DashboardRoute path='/Courses' component={Courses}/>
          <DashboardRoute path='/Announcements' component={Announcements}/>
          <DashboardRoute path='/Updates' component={Updates} />
          <DashboardRoute path='/Assignments' component={Assignments} />
          <DashboardRoute path='/Community' component={Community} />
          <DashboardRoute path='/Settings' component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}
