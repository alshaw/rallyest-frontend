import React from 'react'
import { Modal, Icon, Button } from 'semantic-ui-react'

export default ({ id }) => {
  return (
    <Modal
      trigger={
        <Icon
          button
          color='black'
          name='remove circle'
            />
        }
      closeIcon
      size={'mini'}
        >
      <Modal.Header>
            Remove Post
        </Modal.Header>
      <Modal.Content>
        <p>Are you sure you would like to delete this post?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => this.postDestroy(id)}>
            I'm sure, Delete!
            </Button>
      </Modal.Actions>
    </Modal>
  )
}
