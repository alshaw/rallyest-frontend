import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditModal from './EditModal'
import FileDropdown from './FileDropdown'

// Redux action to request files from Rails API.
import { getFiles } from '../../actions/files'

// Simple custom utility to change date format.
import { getDate } from '../../utils/date'

import {
  Segment,
  Image,
  Dropdown
} from 'semantic-ui-react'

class FileList extends Component {
  state = { files: [] }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getFiles())

    // I will use hard-coded data from the Rails API to fill the client data
    // as there's no connection to the database.
  }

  // Delete file option from dropdown
  // handleFileOption = (value, id) => {
  //   switch (value) {
  //     case 1:
  //       return this.handleFileDelete(id)
  //     default:
  //   }
  // }

  listFiles = (files) => {
    return files.files.map((file, i) =>
      <Segment key={i}>
        <div style={{ display: 'flex' }}>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'center' }}>
            <div style={{ alignSelf: 'center', justifyContent: 'center', paddingRight: '10px' }}>
              <Image src={require('../../assets/images/adobefile.svg')} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '80%' }}>

            <div style={{ flex: 1, fontWeight: 'bold', fontSize: '110%' }}>
              <span>{file.name}</span>
            </div>

            <div style={{ fontStyle: 'italic', fontSize: '90%' }}>
              <span style={{ color: '#8f8f8f' }}>{getDate(file.date)}</span>
            </div>

          </div>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'flex-end' }}>
            <div style={{ padding: '5px' }}>

              <FileDropdown file={file} />

            </div>
          </div>
        </div>
      </Segment>
    )
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
    const { files } = this.props

    // No longer using props to access files because we are not using Redux in the sample.
    // const { files } = this.props
    return (
      <div>
        {this.listFiles(files)}
      </div>
    )
  }
}

// Uses redux to get state, though in this sample I will not use redux,
// the code for the actions/dispatchers/reducers are intact.
const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps)(FileList)
