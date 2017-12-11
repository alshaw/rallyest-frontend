/* jshint esversion: 6 */
import React, { Component } from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleLogout } from '../actions/auth'
import '../assets/Fonts/chunkfive ex.ttf'

class LeftMenu extends Component {
  state = { activeItem: 'Rallyest' }
// Handles the menu animationthat changes the selected item
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleClick = () => {
    const { dispatch } = this.props
    dispatch(handleLogout())
  }
  render () {
    const { activeItem } = this.state

    return (
      <div style={{ backgroundColor: '#0d6192', minHeight: '100vh'}}>
        <div>

          <div style={{ height: '93vh', overflow: 'hidden'}}>
            <Menu secondary vertical >
              <Link to={'/Feed'}>
                <Menu.Item>
                  <Image src={require('../assets/images/Logo_White.png')} />
                </Menu.Item>
              </Link>

              <Link to={'/Files'}>
                <Menu.Item active={activeItem === 'Files'} onClick={this.handleItemClick}>
                  <div style={styles.iconBox}>
                    <div style={styles.icoimage}>
                      <Image
                        src={require('../assets/images/icon-files.svg')}
                        />
                    </div>
                    <div style={styles.textBox}>
                      Files
                    </div>
                  </div>
                </Menu.Item>
              </Link>

              <Link to={'/Photos'}>
                <Menu.Item active={activeItem === 'Photos'} onClick={this.handleItemClick}>
                  <div style={styles.iconBox}>
                    <div style={styles.icoimage}>
                      <Image
                        style={styles.icoimage}
                        src={require('../assets/images/icon-photos.svg')}
                        />
                    </div>
                    <div style={styles.textBox}>
                      Photos
                    </div>
                  </div>
                </Menu.Item>
              </Link>

              <Link to={'/Letters'} >
                <Menu.Item active={activeItem === 'Letters'} onClick={this.handleItemClick}>
                  <div style={styles.iconBox}>
                    <div style={styles.icoimage}>
                      <Image
                        style={styles.icoimage}
                        src={require('../assets/images/icon-letters.svg')}
                        />
                    </div>
                    <div style={styles.textBox}>
                      Letters
                    </div>
                  </div>
                </Menu.Item>
              </Link>

              <Link to={'/Updates'} >
                <Menu.Item active={activeItem === 'Updates'} onClick={this.handleItemClick}>
                  <div style={styles.iconBox}>
                    <div style={styles.icoimage}>
                      <Image
                        style={styles.icoimage}
                        src={require('../assets/images/icon-updates.svg')}
                        />
                    </div>
                    <div style={styles.textBox}>
                      Updates
                    </div>
                  </div>
                </Menu.Item>
              </Link>

              <Link to={'/Courses'}>
                <Menu.Item active={activeItem === 'Courses'} onClick={this.handleItemClick}>
                  <div style={styles.iconBox}>
                    <div style={styles.icoimage}>
                      <Image
                        style={styles.icoimage}
                        src={require('../assets/images/icon-library.svg')}
                        />
                    </div>
                    <div style={styles.textBox}>
                      Courses
                    </div>
                  </div>
                </Menu.Item>
              </Link>

              <Link to={'/Settings'}>
                <Menu.Item active={activeItem === 'Settings'} onClick={this.handleItemClick}>
                  <div style={styles.iconBox}>
                    <div style={styles.icoimage}>
                      <Image
                        style={styles.icoimage}
                        src={require('../assets/images/icon-settings.svg')}
                        />
                    </div>
                    <div style={styles.textBox}>
                      Settings
                    </div>
                  </div>
                </Menu.Item>
              </Link>
            </Menu>
          </div>

          <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center'}}>
            <Button onClick={this.handleClick}
              style={{
                backgroundColor: '#0d6192',
                color: '#E1E6E7',
                display: 'inline-flex'
              }}>
              <i className='arrow left icon' />
              <p
                style={{
                  fontFamily: 'helvetica neue, helvetica, arial, sansSerif',
                  fontWeight: '100',
                  fontSize: '17px',
                  lineHeight: '17px'
                }}
              >
                Logout
              </p>
            </Button>
          </div>

        </div>
      </div>
    )
  }
}

const styles = {
  menu: {
    backgroundColor: '#0d6192',
    minHeight: '100vh',
    fontFamily: 'helvetica neue, helvetica, arial, sansSerif',
    fontWeight: '100',
    fontSize: '17px',
    lineHeight: '17px'
  },
  icoimage: {
    display: 'inline-flex',
    width: '50px',
    justifyContent: 'center'
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'row'
  },
  textBox: {
    display: 'inline-flex',
    fontFamily: 'helvetica neue, helvetica, arial, sansSerif',
    fontWeight: '100',
    fontSize: '17px',
    lineHeight: '17px',
    color: '#E1E6E7'
  }
}

export default connect()(LeftMenu)
