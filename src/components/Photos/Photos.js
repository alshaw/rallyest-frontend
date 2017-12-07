/*jshint esversion: 6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
   Header,
   Grid,
   Segment,
   Card,
   Image,
  } from 'semantic-ui-react';

class Photos extends Component {
  state = { photos: [] }

  async componentDidMount() {
    const photos = await axios.get('/api/photos')

    const parsed_photos = JSON.parse(photos.data.res)

    this.setState({
      photos: parsed_photos.data,
    })
  }

  listPhotos = (photos) => {
    return photos.map(photo =>
      <Card key={photo.id}>
        <p>{photo.attributes.file.name}</p>
        <p>URI: {photo.attributes.file.uri}</p>
        <Image src={photo.attributes.file.uri} />
      </Card>
    );
  }
  
  render() {
    const { photos } = this.state;
    return (
      <div>
        <Header as='h1' textAlign='center'>Photos Component</Header>
        <Segment style={{height: '100vh', margin: '20px'}}>
          <Card.Group>
            {this.listPhotos(photos)}
          </Card.Group>
        </Segment>
      </div>
    );
  }
}

export default connect()(Photos);
