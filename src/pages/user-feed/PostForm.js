import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Form, Modal, Button, Accordion, Icon } from 'semantic-ui-react'

import { setFlash } from '../../actions/flash'

class PostForm extends Component {
  state = { open: false, message: '', activeIndex: 1 }

  handleSubmit = (e) => {
    if (this.state.message === ' ') {
      e.preventDefault()
      const { dispatch } = this.props
      const { message } = this.state
      axios.post('/api/posts', { message })
          .then(res => {
            dispatch(setFlash('Post Successfully Created!', 'green'))
          })
          .catch(res => {
            dispatch(setFlash('Post failed to create', 'red'))
          })
      this.resetForm()
    } else {
      return (
        this.props.dispatch(setFlash('Post failed to create', 'red'))
      )
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleTextChange = (e) => {
    this.setState({ message: e.target.value })
  }

  resetForm = () => {
    this.setState({ message: '', open: false })
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { activeIndex } = this.state
    return (
      <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='write' />
            Create Post
          </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input
                placeholder="What's on your mind?"
                onChange={this.handleTextChange}
                value={this.state.message}
                />
            </Form.Field>
            <Form.Button type='submit'>Submit</Form.Button>
          </Form>
        </Accordion.Content>
      </Accordion>
    )
  }
}

  // render () {
  //   const { open } = this.state;
  //   return (
  //     <Modal trigger={
  //       <Button onClick={() => this.toggleOpen()}>Create Post</Button>} open={open}>
  //       <Modal.Content>
  //         <Modal.Header>Create a Post</Modal.Header>
  //         <Form onSubmit={this.handleSubmit}>
  //           <Form.Field>
  //             <Form.Input
  //               placeholder="What's on your mind?"
  //               onChange={this.handleTextChange}
  //               value={this.state.message}
  //             />
  //           </Form.Field>
  //           <Form.Button type='submit'>Submit</Form.Button>
  //         </Form>
  //         <Button onClick={() => this.toggleOpen()}>Cancel</Button>
  //       </Modal.Content>
  //     </Modal>
  //   );
  //   }
  // }

export default connect()(PostForm)
