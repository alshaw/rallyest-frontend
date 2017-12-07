import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFlash } from '../../actions/flash';
import {
  Modal,
  Button,
  Segment,
  Item,
  Header,
  Dropdown,
  Divider,
  Icon,
  Image,
} from 'semantic-ui-react';

class EditModal extends Component {

  removeLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/removelabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Removed', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label Not Removed', 'red'))
      });
  }

  addLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/addlabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Added', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label not added', 'red'))
      });
  }

  render () {
    const { file, labels } = this.props;
    return (
      <div>
        <Modal trigger={
          <Dropdown.Item style={{ color: '#5CC3E9', display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <Image src={require('../../assets/images/icon-edit.svg')} />
            <p>
              Edit Tags
            </p>
          </Dropdown.Item>
        }
          closeIcon
          size={'mini'}
        >
          <Modal.Header>
            <Icon name='tag' />
            Add/Remove Tags from File
          </Modal.Header>
          <Modal.Content>
            {labels.labels.map(label => 
              <div style= {{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center',}}>
                  <div
                    style={{
                      display: 'flex',
                      color: '#E1E6E7', 
                      padding: '5px 7px 5px 7px', 
                      backgroundColor: '#00AADF', 
                      borderRadius: '25px', 
                      margin: '3px',
                      flexWrap: 'wrap',
                      minWidth: '80px',
                      alignContent: 'center',
                      justifyContent: 'center'
                    }} 
                    >
                    <div style={{marginRight: '10px'}}>
                      <Icon name='tag' />
                      {label.attributes.name}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex',flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                  <div>
                    <Button 
                      basic 
                      color='green'
                      onClick={() => this.addLabel(file.id, label)}
                      style={{
                        display: 'flex',
                        padding: '5px 7px 5px 7px', 
                        borderRadius: '25px', 
                        margin: '2px',
                        padding: '5px 7px 5px 7px', 
                        alignContent: 'center',
                        justifyContent: 'center'
                      }}>
                      <Icon.Group size='large'>
                        <Icon name='tags' />
                        <Icon corner name='add' />
                      </Icon.Group>
                    </Button>
                  </div>
                  
                  <div>
                    <Button
                      basic 
                      color='red' 
                      onClick={() => this.removeLabel(file.id, label)}
                      style={{
                      display: 'flex',
                      padding: '5px 7px 5px 7px',
                      borderRadius: '25px', 
                      margin: '2px',
                      padding: '5px 7px 5px 7px', 
                      alignContent: 'center',
                      justifyContent: 'center'
                    }} >
                      <Icon.Group size='large'>
                        <Icon name='tags' />
                        <Icon corner name='minus' />
                      </Icon.Group>
                    </Button>
                  </div>
                </div>
                <div>

                <Divider/>
                </div>
              </div>
            )}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { labels: state.labels }
}

export default connect(mapStateToProps)(EditModal);