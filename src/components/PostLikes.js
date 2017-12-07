import React, { Component } from 'react';
import { Icon, Accordion } from 'semantic-ui-react';

class PostLike extends Component {
  state = { 
    activeIndex: 1,
    like: '' 
  }

  handelSubmit = (e) => {
    e.preventDefault();
  }

  handleClick = (e) => {
    //heart should turn red once liked
  }

  render() {
    return(
      <Accordion>
        <Accordion.Title>
          <Icon button name='heart' onClick='loading' />
        </Accordion.Title>
      </Accordion>
    )
  }
}

export default PostLike;