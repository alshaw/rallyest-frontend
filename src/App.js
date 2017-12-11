import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'

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
import Letters from './pages/Letters'
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

const DashboardRoute = ({ component: Component, user, authenticated, ...rest }) => {
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
  constructor (props) {
    super()
    
    this.state = {
      authenticated: false
    }
    this.authCookie = this.authCookie.bind(this)
  }

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  
  componentWillMount () {
    this.authCookie()
  }
  
  authCookie () {
    const { cookies } = this.props
    const token = cookies.get('access_token')

    if (token) {
      this.setState({ authenticated: true })
    } else {
    }
  }
  
  render () {
    const { authenticated } = this.state
    return (
      <Router>
        <Switch>
          <LoginLayoutRoute exact path='/' component={Login} />
          <LoginLayoutRoute path='/login' component={Login} />
          <LoginLayoutRoute path='/Tour_1' component={Page1} />
          <LoginLayoutRoute path='/Tour_2' component={Page2} />
          <LoginLayoutRoute path='/Tour_3' component={Page3} />
          <DashboardRoute exact path='/Feed' component={UserFeed} authenticated={authenticated} />
          <DashboardRoute path='/Files' component={Files} authenticated={authenticated} />
          <DashboardRoute path='/Photos' component={Photos} authenticated={authenticated} />
          <DashboardRoute path='/Letters' component={Letters} authenticated={authenticated} />
          <DashboardRoute path='/Goals' component={Goals} authenticated={authenticated} />
          <DashboardRoute path='/Courses' component={Courses} authenticated={authenticated} />
          <DashboardRoute path='/Announcements' component={Announcements} authenticated={authenticated} />
          <DashboardRoute path='/Updates' component={Updates} authenticated={authenticated} />
          <DashboardRoute path='/Assignments' component={Assignments} authenticated={authenticated} />
          <DashboardRoute path='/Community' component={Community} authenticated={authenticated} />
          <DashboardRoute path='/Settings' component={Settings} authenticated={authenticated} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default withCookies(App)
