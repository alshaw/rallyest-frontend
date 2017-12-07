import React, { Component } from 'react'
import { Modal, Icon, Button } from 'semantic-ui-react'
import axios from 'axios'

import { setFlash } from '../../actions/flash'

export default class AreYouSure extends Component {
  render () {
    const { id } = this.props

    return (
      <Modal
        trigger={
          <Icon
            button
            color='black'
            name='remove circle' />
          }
        closeIcon
        size={'mini'}>
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

  postDestroy (id) {
    // const { post } = this.state
    const { dispatch } = this.props
    axios.delete(`/api/posts/${id}`)
      .then(res => {
        dispatch(setFlash('Post deleted', 'green'))
        // this.setState({ posts: post.filter(post => post.id !== id) })
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Failed to delete post', 'red'))
      })
  }
}
