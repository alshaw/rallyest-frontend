/* jshint esversion: 6 */
import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  Menu,
  Image,
  Dropdown
} from 'semantic-ui-react'

import { feedButtons, fileButtons } from './NavButtons'

class NavBar extends React.Component {
  componentWillMount () {
    this.buttons()
  }

  homeTeamOptions = [
    { key: 1, text: 'Hometeam1', value: 1 },
    { key: 2, text: 'Hometeam2', value: 2 },
    { key: 3, text: 'Hometeam3', value: 3 }
  ]

  announceOptions = [
    { key: 1, text: 'Announcement1', value: 1 },
    { key: 2, text: 'Announcement2', value: 2 },
    { key: 3, text: 'Announcement3', value: 3 }
  ]

  homeTrigger = (
    <span>
      <Image src={require('../assets/images/teamimg1.png')} />
    </span>
  )

  announceTrigger = (
    <span>
      <Image src={require('../assets/images/selected.svg')} alt='Announcements' />
    </span>
  )

  buttons = () => {
    let component
    this.props.route.props.children.map(child => component = child)
      // grabs current route's pathname and compares it in switch
    switch (component.props.location.pathname) {
      case '/Files':
        return fileButtons()
      case '/Feed':
        return feedButtons()
      default:
    }
  }

  render () {
    return (

      <div style={{ minWidth: '100%' }}>
        <Menu borderless style={{ borderRadius: '0', paddingLeft: '10px' }}>

          {this.buttons()}

          <Menu.Item position='right'>
            <Link to='/HomeTeam'>
              <Image src={require('../assets/images/team.svg')} alt='Team' />
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Dropdown
              trigger={this.announceTrigger}
              options={this.announceOptions}
              icon={null}
              pointing='top right'
            />
          </Menu.Item>

          <Menu.Item>
            <Dropdown
              trigger={this.homeTrigger}
              options={this.homeTeamOptions}
              icon={null}
              pointing='top right'
            />
          </Menu.Item>

        </Menu>
      </div>

    )
  }
};

export default connect()(NavBar)
