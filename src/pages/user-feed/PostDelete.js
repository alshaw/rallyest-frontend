import React, { Component } from 'react'
import { Modal, Icon, Button } from 'semantic-ui-react'
import axios from 'axios'

import { setFlash } from '../../actions/flash'
import { deletePost } from '../../actions/posts'

export default class PostDelete extends Component {
  constructor () {
    super()

    this.state = { modalOpen: false }
  }

  render () {
    const { id } = this.props

    return (
      <Modal
        open={this.state.modalOpen}
        trigger={<Icon onClick={this.openModal.bind(this)} button color='black' name='remove circle' />}
        closeIcon
        size={'mini'}>
        <Modal.Header>
            Remove Post
        </Modal.Header>

        <Modal.Content>
          <p>Are you sure you would like to delete this post?</p>
        </Modal.Content>

        <Modal.Actions>
          <Button negative onClick={() => this.handlePostDelete(id)}>
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
        this.setState({ modalOpen: false })
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Failed to delete post', 'red'))
      })
  }

  handlePostDelete (id) {
    const { dispatch } = this.props
    dispatch(deletePost(id))
  }

  openModal () {
    this.setState({ modalOpen: true })
  }
}
