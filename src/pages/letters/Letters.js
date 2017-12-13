import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getLetters } from '../../actions/letters'

import {
  Segment,
  Grid
} from 'semantic-ui-react'

import LettersList from './LettersList'

class Letters extends Component {
  componentWillMount () {
    const { dispatch } = this.props
    dispatch(getLetters())
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getLetters())
  }

  render () {
    const { letters } = this.props
    return (
      <div style={styles.page_container}>
        <div >
          <div>
            <Grid centered>
              <Grid.Column width={8}>

                <div style={{ marginBottom: '15px', }}>
                  <LettersList letters={letters} />
                </div>

              </Grid.Column>
              <Grid.Column width={8}>

                <Segment style={{ display: 'flex', justifyContent: 'flex-start', }}>
                  <div>
                    <p style={{
                      fontFamily: 'helvetica neue, helvetica, arial, sansSerif',
                      fontWeight: '200',
                      fontSize: '17px',
                      paddingRight: '10px',
                      color: '#00AADF'
                    }}
                    >
                      <div style={{ display: 'inline-flex' }}>
                      </div>
                    </p>
                  </div>
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

const mapStateToProps = (state) => {
  return { letters: state.letters }
}

export default connect(mapStateToProps)(Letters)
