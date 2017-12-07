import React from 'react';
import store from '../store';

import { Button, Image, Menu } from 'semantic-ui-react';
import { toggleAccordionOn, toggleAccordionOff } from '../actions/files';

const toggleAccordion = () => {
  let { files } = store.getState('files')
  if (files.active === 1) {
    store.dispatch(toggleAccordionOn())
  } else {
    store.dispatch(toggleAccordionOff())
  }
}

export const fileButtons = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Menu.Item onClick={() => toggleAccordion()} style={styles.background}>
        <Image src={require('../assets/images/icon-create-post.svg')} alt='Upload' />
      </Menu.Item>
    </div>
  )
}

export const feedButtons = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Menu.Item style={styles.background}>
        <Image src={require('../assets/images/icon-upload-files.svg')} alt='Team' />
      </Menu.Item>

      <Menu.Item style={styles.background}>
        <Image src={require('../assets/images/photo.svg')} alt='Upload Photo' />
      </Menu.Item>
    </div>
  )
}

const styles = {
  background: {
    background: 'none'
 }
}
