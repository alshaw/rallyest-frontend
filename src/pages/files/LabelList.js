import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Segment,
  Item,
  Button,
  Icon
} from 'semantic-ui-react'

import { setFlash } from '../../actions/flash'
import { getLabels } from '../../actions/labels'

class LabelList extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    dispatch(getLabels())
  }

  deleteLabel = (id) => {
  //   const { dispatch, labels } = this.props
  //   axios.delete(`/api/labels/${id}`)
  //     .then(res => {
  //       dispatch(setFlash('Label deleted', 'green'))
  //       this.setState({ labels: labels.filter(label => label.id !== id) })
  //     })
  //     .catch(res => {
  //       console.log(res)
  //       dispatch(setFlash('Label failed to delete', 'red'))
  //     })
  }

  addLabel = (id, label) => {
    // const { dispatch } = this.props
    // axios.post('/api/addlabel', { id, label })
    //   .then(res => {
    //     console.log(res)
    //     dispatch(setFlash('Label Added to File', 'green'), err => console.log(err))
    //   })
  }

  listLabels = (labels) => {
    return labels.labels.map(label =>
      <Button
        key={label.id}
        style={{
          color: '#E1E6E7',
          padding: '5px 7px 3px 7px',
          backgroundColor: '#00AADF',
          borderRadius: '25px',
          margin: '3px'
        }}
      >
        {label.name}
        <Icon
          button
          color='#E1E6E7'
          name='remove circle'
          style={{paddingLeft: '10px'}}
          onClick={() => this.deleteLabel(label.id)}
        />
      </Button>
    )
  }

  render () {
    const { labels } = this.props
    return (
      <div>
        {this.listLabels(labels)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { labels: state.labels }
}

export default connect(mapStateToProps)(LabelList)
