import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import EditModal from './EditModal';
import FileDropdown from './FileDropdown';
import { getFiles } from '../../actions/files';

import {
  Segment,
  Button,
  Image,
  Dropdown,
} from 'semantic-ui-react';

class FileList extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getFiles())
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getFiles())
  }

  handleFileOption = (value, id) => {
    switch (value) {
      case 1:
        return this.handleFileDelete(id)
      default:
        return;
    }
  }

  listFiles = (files) => {
    return files.files.map(file =>
      <Segment key={file.id}>
        <div style={{ display: 'flex', }}>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'center' }}>
            <div style={{ alignSelf: 'center', justifyContent: 'center', paddingRight: '10px' }}>
              <Image src={require('../../assets/images/adobefile.svg')} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '80%' }}>

            <div style={{ flex: 1, fontWeight: 'bold', fontSize: '110%' }}>
              <span>{file.attributes.name}</span>
            </div>

            <div style={{ fontStyle: 'italic', fontSize: '90%', }}>
              <span style={{ color: '#8f8f8f' }}>{file.attributes.uploadDate}</span>
            </div>

          </div>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'flex-end' }}>
            <div style={{ padding: '5px', }}>

              <FileDropdown file={file} />

            </div>
          </div>
        </div>
      </Segment>
    );
  }

  homeTeamOptions = [
    { key: 1, text: 'Edit File Tags', value: 1 },
    { key: 2, text: 'Delete File', value: 2 },
  ]

  homeTrigger = (
    <span>
      <Image src={require('../../assets/images/icon-more.svg')} />
    </span>
  )

  render () {
    const { files } = this.props;
    return (
      <div>
        {this.listFiles(files)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps)(FileList);