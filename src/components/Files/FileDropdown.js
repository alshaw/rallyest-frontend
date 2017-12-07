import React, { Component } from 'react';

import EditModal from './EditModal';
import { deleteFile } from '../../actions/files';
import { connect } from 'react-redux';

import { Dropdown, Image, Icon } from 'semantic-ui-react';

class FileDropdown extends Component {

  handleFileDelete = (id) => {
    this.props.dispatch(deleteFile(id))
  }

  render() {
    const { file } = this.props;
    return (
      <Dropdown trigger={this.homeTrigger} icon={null} closeOnChange>
        <Dropdown.Menu>
          
          <Dropdown.Item>
            <EditModal file={file} />
          </Dropdown.Item>

          <Dropdown.Item 
            onClick={() => this.handleFileDelete(file.id)} 
            style={
              { color: '#5CC3E9', 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'center', 
              padding: '10px',
              }
            }
          >
            <Image src={require('../../assets/images/icon-trash.svg')} />
            <p style={{'color':'#5CC3E9'}}>
              Delete
            </p> 
          </Dropdown.Item>
        
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  homeTrigger = (
    <span>
      <Icon style={{color: '#8f8f8f'}} size='large' link name='ellipsis horizontal'/>
    </span>
  )
}

export default connect()(FileDropdown);