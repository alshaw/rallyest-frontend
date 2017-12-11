
import React, { Component } from 'react'
import { Header, Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import { handleLogin } from '../../actions/auth'
import { verifyToken } from '../../actions/auth'

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target
    this.setState({ [id]: value })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { dispatch, history } = this.props
    const { email, password } = this.state
    if (/[a-z0-9]+[_a-z0-9.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(email)) {
      dispatch(handleLogin(email, password, history))
    } else {
      alert('This email is Invalid')
    }
  }

  render () {
    const { email, password, redirect } = this.state
    return (
      <div style={styles.flexContainer}>
        <div style={styles.box}>
          <div style={styles.blueBox}>
            <Header
              textAlign='center'
              style={{
                color: '#E1E6E7',
                fontFamily: 'helvetica neue, helvetica, arial, sansSerif',
                fontWeight: '100',
                fontSize: '4vh'
              }}
            >
              Sign in
            </Header>
          </div>
          <div>
            <Form
              onSubmit={this.handleSubmit}
              style={{backgroundColor: '#ffffff', borderRadius: '0px 0px 10px 10px' }}
            >
              <div style={styles.formFieldBox}>
                <div style={styles.formItemTop}>
                  <Form.Field>
                    <input
                      required
                      id='email'
                      value={email}
                      placeholder='Email'
                      onChange={this.handleChange}
                      style={styles.input}
                      />
                  </Form.Field>
                </div>
                <div style={styles.formItem}>
                  <Form.Field>
                    <input
                      required
                      id='password'
                      value={password}
                      placeholder='Password'
                      type='password'
                      onChange={this.handleChange}
                      style={styles.input}
                      />
                  </Form.Field>
                </div>
                <div style={styles.formButton}>
                  <Button circular fluid primary type='submit' style={{width: '15vw', color: '', backgroundColor: '#00AADF' }}>
                    Sign in
                  </Button>
                </div>
              </div>
              <Segment textAlign='center' basic>
                <div>
                  <Link to={'Home'}>
                    Forgot Password?
                  </Link>
                </div>
                <div>
                  <Link to={'/Tour_1'}>
                    Click HERE to Take The Tour!
                  </Link>
                </div>
              </Segment>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  box: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px'
  },
  blueBox: {
    backgroundColor: '#0d6192',
    borderRadius: '10px 10px 0px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: '700px',
    height: '100%',
    minHeight: '15vh'

  },
  formFieldBox: {
    width: '60%',
    minWidth: '700px',
    height: '40%',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    paddingBottom: '5px'

  },
  input: {
    width: '275px',
    borderLeft: '0px',
    borderTop: '0px',
    borderRight: '0px',
    borderRadius: '0px'
  },
  formItemTop: {
    marginTop: '5vh',
    marginBottom: '1vh'
  },
  formItem: {
    marginTop: '1vh',
    marginBottom: '1vh'
  },
  formButton: {
    marginTop: '3vh',
    marginBottom: '1vh'
  }
}

export default connect()(Login)
