
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NoAuthFooter extends Component {
  state = { activeItem: 'closest' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
    const { activeItem } = this.state

    return (
      <div style={styles.menu}>

        <div style={styles.menuItem}>
          <Menu text vertical>

            <Menu.Item header style={styles.header}>
              Using Rallyest
            </Menu.Item>

            <Link to='/'>
              <Menu.Item name='Product' active={activeItem === 'Product'} onClick={this.handleItemClick} />
            </Link>

            <Link to='/'>
              <Menu.Item name='Support' active={activeItem === 'Support'} onClick={this.handleItemClick} />
            </Link>

          </Menu>
        </div>

        <div style={styles.menuItem}>
          <Menu text vertical>

            <Menu.Item header style={styles.header}>
              Legal
            </Menu.Item>

            <Link to='/'>
              <Menu.Item name='Privacy' active={activeItem === 'Privacy'} onClick={this.handleItemClick} />
            </Link>

            <Link to='/'>
              <Menu.Item name='Security' active={activeItem === 'Security'} onClick={this.handleItemClick} />
            </Link>

            <Link to='/'>
              <Menu.Item name='Terms of service' active={activeItem === 'Terms of Service'} onClick={this.handleItemClick} />
            </Link>

            <Link to='/'>
              <Menu.Item name='Policies' active={activeItem === 'Policies'} onClick={this.handleItemClick} />
            </Link>

          </Menu>
        </div>

        <div style={styles.menuItem}>
          <Menu text vertical>

            <Menu.Item header style={styles.header}>
              Handy Links
            </Menu.Item>

            <Link to='/'>
              <Menu.Item name='Download desktop app' active={activeItem === 'Download desktop app'} onClick={this.handleItemClick} />
            </Link>

            <Link to='/'>
              <Menu.Item name='Download mobile app' active={activeItem === 'Download mobile app'} onClick={this.handleItemClick} />
            </Link>

          </Menu>
        </div>
      </div>
    )
  }
}

const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px'
  },
  menuItem: {
    marginTop: '15px',
    marginBottom: '10px'
  },
  header: {
    textTransform: 'none'
  }
}

export default NoAuthFooter
