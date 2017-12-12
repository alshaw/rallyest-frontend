import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

import { Segment, Image } from 'semantic-ui-react'

class LettersList extends Component {
  listLetters (letters) {
    return letters.letters.included.map(letter =>
      <Segment key={letter.id}>
        <div style={{ display: 'flex' }}>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'center' }}>
            <div style={{ alignSelf: 'center', justifyContent: 'center', paddingRight: '10px' }}>
              <Image src={require('../../assets/images/adobefile.svg')} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '80%' }}>

            <div style={{ flex: 1, fontWeight: 'bold', fontSize: '110%' }}>
              <span>{letter.attributes.name}</span>
            </div>

            <div style={{ fontStyle: 'italic', fontSize: '90%', }}>
              <span style={{ color: '#8f8f8f' }}>{letter.attributes.uploadDate}</span>
            </div>

          </div>
        </div>
      </Segment>
    )
  }

  render () {
    const { letters } = this.props
    return (
      <div>
        {this.listLetters(letters)}
      </div>
    )
  }
}

export default connect()(LettersList)
