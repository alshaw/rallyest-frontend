import React, { Component } from 'react';
import axios from 'axios';
import { setFlash } from '../../actions/flash';
import VisibleToModal from './VisibleToModal';
import upload from '../../assets/images/upload.svg';
import { handleUpload } from '../../actions/files';
import {
  Header,
  Segment,
  Item,
  Grid,
  Image,
  Button,
  Modal,
  Loader,
  Dimmer,
  Input,
  Form,
  Divider,
  TextArea,
  Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';


class FileModal extends Component {
  state = { 
    modalVisible: false,
    files: [],
    fileUploading: null,
    description: ''
   }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleUpload = () => {
    axios.post('/api/upload')
      .then(res => this.props.dispatch(setFlash('Successfully uploaded files', 'green')), err => console.log(err))
    this.setState({ modalVisible: !this.state.modalVisible })
  } 

  onDrop = (files) => {
    const { dispatch } = this.props;
    dispatch(handleUpload(files[0]))
    this.setState({ files: files })
  }

  renderUploadBox() {
    if (this.state.files.length > 0) {

      return this.state.files.map(file => 
        <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
          <Image src={file.preview} size='small' />
        </div>
      )

      // return (
      //   <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
      //     <Image src={this.state.files[0].preview} size='small' />
      //   </div>
      // )
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

  render() {
    return (
      <Modal 
        size='small'
        open={this.state.modalVisible}
        trigger={
          <Button
            onClick={this.toggleModal}
            style={{padding: '0px', width: '100%'}}
          >
            <div
              style={{
                width: '100%', 
                height: '21vh', 
                borderRadius: '5px', 
                border: '1px solid #00AADF',
                backgroundColor: '#F6F6F6',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center',}}>
                <div style={{ display: 'flex', flexDirection: 'column', }}>

                  <div style={{ padding: '15px 0px 10px 0px', alignSelf: 'center'}}>
                    <Image src={upload}/>
                  </div>

                  <div style={{ color: '#8f8f8f', fontSize: '180%', fontWeight: '100', padding: '3px 10px 3px 10px', alignSelf: 'center'}}> 
                    Upload Files
                  </div>

                  <div style={{ color: '#8f8f8f', fontSize: '70%', fontWeight: '100', padding: '10px', alignSelf: 'center'}}>
                    Drag and Drop files here to upload
                  </div>

                </div>
              </div>
            </div>

          </Button>
        }>
        <Modal.Header>Post a File </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
              <p>File Name</p>
                {this.renderUploadBox()}
            </div>
            <Divider />
            <div>
              <p>Labels</p>
              <Button 
                circular
                style={{ color: '#ffffff', backgroundColor: '#00AADF' }}
              >
                medical - forms
              </Button>
              <Button
                basic color='blue' circular
                style={{ color: '#0d6192', backgroundColor: 'transparent' }}
              >
                release - forms
              </Button>
            </div>
            <Divider />
            <div>
              <Form>
                <TextArea 
                  autoHeight 
                  placeholder='File Description'
                  name='description'
                  style={{ minHeight: 100, border: 'none' }} 
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Form>
            </div>
            <Divider />
            <div>
              <p>
                <Icon color='blue' name='file text outline' />Files
                <Icon color='yellow' name='smile' />Feeling
                <VisibleToModal />
              </p>
            </div>
            <div>

            </div>
            <Divider />
            <div style={{ padding: '30px' }}>
              <Button 
                onClick={() => this.setState({ modalVisible: false })} 
                circular basic='blue' floated='left'
                style={{ width: '18vw' }}
              >
               Cancel
              </Button>
              <Button 
                circular 
                type='submit' 
                floated='right'
                onClick={() => this.handleUpload()}
                style={{ width: '18vw', color: '', backgroundColor: '#00AADF', color: '#ffffff' }}
              >
               Post
              </Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { fileUpload: state.fileUpload }
}

export default connect(mapStateToProps)(FileModal);