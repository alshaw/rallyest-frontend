import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { handleUpload } from '../../actions/files';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

class FileUpload extends Component {
  state = { 
    fileUploading: false,
    files: []
  }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading })
  }

  onDrop = (files) => {
    // const { dispatch } = this.props;
    // this.toggleUploading();
    // dispatch(handleUpload(files[0], this.toggleUploading));
    this.setState({files: files})
    console.log("state set")
  }

  render() {
    if (this.state.files.length > 0) {
      return (
        <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
          <Image src={this.state.files[0].preview} size='small'/>
        </div>
      )
    }
    return (
      <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
        <Dropzone
          className="dropzone"
          accept="image/jpeg, image/png"
          onDrop={this.onDrop}
          >
        </Dropzone>
      </div>
    );
  }
}

export default connect()(FileUpload);
