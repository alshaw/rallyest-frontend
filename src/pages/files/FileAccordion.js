import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Form, Icon, Menu, Image } from 'semantic-ui-react'

import FileModal from './FileModal'

class FileAccordion extends Component {
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  fileForm = () => {
    <Form>
      <Form.Title>
        Add File
      </Form.Title>
    </Form>
  }

  render () {
    const { files } = this.props
    return (
      <div >
        <Accordion>
          <Accordion.Title active={files.active === 0} index={0} />
          <Accordion.Content active={files.active === 0}>
            <FileModal />
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps)(FileAccordion)
