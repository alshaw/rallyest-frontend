
import React, { Component } from 'react'

import axios from 'axios'
import { Redirect, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
   Icon,
   Dropdown
  } from 'semantic-ui-react'

import FileUpload from './FileUpload'
import FileAccordion from './FileAccordion'
import LabelList from './LabelList'
import LabelForm from './LabelForm'
import FileList from './FileList'

import { setHeaders } from '../../actions/headers'
import { setFlash } from '../../actions/flash'
import upload from '../../assets/images/upload.svg'

class Files extends Component {
  state = {
    name: '',
    open: false
  }

  homeTeamOptions = [
    { key: 1, text: 'Edit File Tags', value: 1 },
    { key: 2, text: 'Delete File', value: 2 }
  ]

  homeTrigger = (
    <span>
      <Image src={require('../../assets/images/icon-more.svg')} />
    </span>
  )

  render () {
    const { files, labels } = this.state
    return (
      <div style={styles.page_container}>
        <div >
          <div>
            <Grid centered>
              <Grid.Column width={8}>

                <div style={{ alignContent: 'center', justifyContent: 'center', padding: '1vh' }}>
                  <FileAccordion />
                </div>

                <div style={{marginBottom: '15px' }}>
                  <FileList />
                </div>

              </Grid.Column>
              <Grid.Column width={8}>

                <Segment style={{display: 'flex', justifyContent: 'flex-start' }}>
                  <div>
                    <p style={{
                      fontFamily: 'helvetica neue, helvetica, arial, sansSerif',
                      fontWeight: '200',
                      fontSize: '17px',
                      paddingRight: '10px',
                      color: '#00AADF'
                    }}
                    >
                      <div style={{display: 'inline-flex' }}>
                      Tags
                        <LabelForm />
                      </div>
                    </p>
                  </div>
                  <Button.Group style={{flexWrap: 'wrap' }}>
                    <LabelList />
                  </Button.Group>
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  page_container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '3vh'
  }
}

export default connect()(Files)
