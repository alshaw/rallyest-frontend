import React, { Component } from 'react'
import { Modal, Form, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'

import { setFlash } from '../../actions/flash'
import { setHeaders } from '../../actions/headers'

export default class PostEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editPost: { ...props.post },
      message: ''
    }
  }

  // editPost(id) {
  //   const { dispatch } = this.props
  //   const { message } = this.state
  //   axios.put('/api/posts', { message })
  //   .then(res => {
  //     this.props.setPosts(res.data)
  //     dispatch(setHeaders(res.headers))
  //   })
  //   .catch(res => {
  //     dispatch(setFlash('Error editing post', 'red'))
  //     dispatch(setHeaders(res.headers))
  //   })
  // }

  // handleChange = (e) => {
  //   e.preventDefault()
  //   const { id, value } = e.target
  //   this.setState({ editPost: {...this.state.editPost, [id]: value }})
  // }

  render () {
    const { id, text } = this.props

    return (
      <Modal
        trigger={
          <Icon button color='black' name='edit' />
        }
        closeIcon
        size={'mini]'}>
        <Modal.Header>Edit Post</Modal.Header>
        <Modal.Content>
          <Form onSubmit={() => this.editPost(id)}>
            <Form.Field>
              <label>Edit Post</label>
              <Form.Input
                value={text}
                id='message'
                onChange={this.handleChange}
                // placeholder={post.attributes.text}
                autoFocus />
            </Form.Field>
            <Button editPost>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }

  editPost (e) {
    if (this.props.message === ' ') {
      e.preventDefault()
      const { dispatch } = this.props
      const { message } = this.state
      axios.post(`/api/posts/`, { message })
        .then(res => {
          this.props.setPosts(res.data)
          dispatch(setHeaders(res.headers))
        })
        .catch(res => {
          dispatch(setFlash('Failed to edit post', 'red'))
          dispatch(setHeaders(res.headers))
        })
    }

    return null
  }

  handleChange (e) {
    this.setState({ message: e.target.value })
  }
}
