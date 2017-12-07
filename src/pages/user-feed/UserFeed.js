import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Feed, Segment, Dimmer, Loader } from 'semantic-ui-react'

import PostForm from './PostForm'
import PostEdit from './PostEdit'
import PostsList from './PostsList'

import { getPosts } from '../../actions/posts'
import { verifyToken } from '../../actions/auth'
import { setHeaders } from '../../actions/headers'
import { setFlash } from '../../actions/flash'

class UserFeed extends Component {
  constructor () {
    super()

    this.state = {
      posts: [],
      editPost: null
    }
  }

  render () {
    const { editPost } = this.state
    const { posts } = this.props
    if (posts) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center'
          }}>
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center'
            }} />
          <div style={{padding: '30px'}}>
            <PostForm />
            <Feed>
              <PostsList posts={posts} />
            </Feed>
          </div>
        </div>
      )
    }

    return (
      <Segment basic>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
    )
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(getPosts())
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getPosts())
  }

  // potential func that wont let you edit other users posts
  // setUsers = (user) => {
    //   const users = this.state.users.map(u => {
      //     if(user.id === u.id)
      //       return user
      //     return u
      //   })
      //   this.setState({users, editPost: null})
      // }

  toggleOpen () {
    this.setState({ open: !this.state.open })
  }

  postDestroy (id) {
        // const { post } = this.state
    const {dispatch} = this.props
    axios.delete(`/api/posts/${id}`)
      .then(res => {
        dispatch(setFlash('Post deleted', 'green'))
        // this.setState({ posts: post.filter(post => post.id !== id) })
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Failed to delete post', 'red'))
      })
  }

  setDestroyPost (areYouSure) {
    this.setState({ areYouSure })
  }

      // Post List values:
      // post id = post.id
      // post content = post.attributes.text
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(UserFeed)
