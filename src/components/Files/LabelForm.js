import React, { Component } from 'react';
import axios from 'axios';
import {Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

import { Form, Modal, Button } from 'semantic-ui-react';

class LabelForm extends Component {
  state = { name: '', open: false }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { name } = this.state;
    axios.post('/api/labels', { name })
      .then(res => {
        dispatch(setHeaders(res.headers))
        dispatch(setFlash('Label successfully created', 'green'))
      })
      .catch(res => {
        dispatch(setFlash('Label failed to create', 'red'))
      });
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      open: false,
    })
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <Modal trigger={<Icon name='add circle' style={{ paddingLeft: '5px', color: '#8f8f8f', }} onClick={() => this.toggleOpen()}/>} open={open}>
        <Modal.Content>
          <Modal.Header>Create a Label</Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input placeholder="Enter name here..." onChange={this.handleChange} value={this.state.name} />
            </Form.Field>
            <Form.Button type='submit'>Submit</Form.Button>
            <Form.Button onClick={() => this.toggleOpen()}>Cancel</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default connect()(LabelForm);