/*jshint esversion: 6 */
import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const NoAuthNav = () => (
  <div style={styles.menu}>
    <Menu borderless style={styles.menu}>
      <Menu.Item name='Rallyest' borderless style={{paddingLeft: '75px'}}>
        <Link to={'/login'}>
          <Image
            src={require('../../assets/images/Logo_White.png')}
            size='small'/>
        </Link>
      </Menu.Item>
      
      <Menu.Menu position='right'>
  
        <Menu.Item borderless>
          <Link to={'/'} style={styles.menuItem} as='h1'>Product</Link>
        </Menu.Item>
        
        <Menu.Item borderless>  
          <Link to={'/'} style={styles.menuItem} as='h1'>Support</Link>
        </Menu.Item>
        
        <Menu.Item borderless>  
          <Link to={'/'} style={styles.menuItem} as='h1'>Find your team</Link>
        </Menu.Item>
        
        <Menu.Item borderless style={styles.itemRight}>  
          <Link to={'/'} style={styles.menuItem} as='h1'>Sign In</Link>
        </Menu.Item>
  
      </Menu.Menu>
    </Menu>
  </div>
)

const styles = {
  menu: {
    backgroundColor: '#0d6192',
    marginBottom: '1vh',
    height: '15vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRight: {
    marginRight: '2vw',
  },
  headerContainer:{
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    overflow: 'hidden',
    backgroundColor: '#2d618e',
    width: '90vw',
  },
  menuItem: {
    color: '#e1e6e7',
    fontSize: '15px',
    margin: '0px 7px 0px 7px',
  },
}

export default NoAuthNav;