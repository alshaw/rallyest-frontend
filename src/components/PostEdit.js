import React, { Component } from 'react';
import { Modal, Form, Input, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
import UserFeed from './UserFeed';
import axios from 'axios';

class PostEdit extends Component {
  state = { editPost: { ...this.props.post } }

  editPost = (e) => {
    if (this.props.message === ' ') {
      e.preventDefault();
      const { dispatch } = this.props;
      const { message } = this.state;
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
    else
      return null
  }

  // editPost(id) {
  //   const { dispatch } = this.props;
  //   const { message } = this.state;
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
  //   e.preventDefault();
  //   const { id, value } = e.target
  //   this.setState({ editPost: {...this.state.editPost, [id]: value }})
  // }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  render(post) {
    if(this.props.editPost) {
      const { post, id, text } = this.props.editPost
      return(
        <Modal
          closeIcon={
            <Button 
              onClick={() => this.setState({ editPost: null })} 
              floated='right' 
              compact 
              tiny
            >X
            </Button>
          }
          open={ this.props.editPost ? true : false }
        >
          <Modal.Header>Edit Post</Modal.Header>
          <Modal.Content>
            <Form onSubmit={() => this.editPost(id) }>
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
    } else
      return null
  }
}

export default PostEdit;