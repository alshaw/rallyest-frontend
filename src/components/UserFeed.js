/*jshint esversion: 6 */
import React, { Component } from 'react';
import { verifyToken } from '../actions/auth';
import { connect } from 'react-redux';
import axios from 'axios';
import PostForm from './PostForm';
import PostEdit from './PostEdit';
import PostComment from './PostComment';
import PostLikes from './PostLikes';
import { getPosts } from '../actions/posts';
import {
  Form,
  Accordion,
  Modal,
  Header,
  Feed,
  Image,
  Segment,
  Dimmer,
  Loader,
  Icon,
  Divider,
  Button,
} from 'semantic-ui-react';
import { setHeaders } from '../actions/headers';
import { setFlash } from '../actions/flash';

class UserFeed extends Component {
  state = { posts: [], editPost: null }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getPosts())
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPosts());
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

  areYouSure = (id) => {
    return(
      <Modal
        trigger={ 
          <Icon 
            button 
            color='black' 
            name='remove circle'
          />
        }
        closeIcon
        size={'mini'}
      >
        <Modal.Header>
          Remove Post
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you would like to delete this post?</p>
          {/* <Form>
            <Form.Input
              value={post.attributes.text} />
          </Form> */}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => this.postDestroy(id)}>
            I'm sure, Delete!
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  postDestroy = (id) => {
    // const { post } = this.state;
    const {dispatch} = this.props;
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

  setEditPost = (id) => {
    this.setState({ editPost: id });
  }

  setDestroyPost = (areYouSure) => {
    this.setState({ areYouSure })
    
  }


  // Post List values:
  // post id = post.id
  // post content = post.attributes.text
  
  listPosts = (posts) => {
    return posts.posts.map( post =>
      <Segment key={post.id}>
        <Feed.Event>
          <div style={{ display: 'flex', }}>
            <div>
              <div>
                <Image
                  src={require('../assets/images/teamimg1.png')}
                  style={{ paddingRight: '15px', }}
                  />
              </div>
            </div>

            <div style={{ display: 'flex', }}>
              <div>
                <div style={{ display: 'flex', paddingBottom: '1vh',}}>
                  <Feed.Label>
                    //TODO: User Name Here
                  </Feed.Label>
                </div>

                <div style={{ display: 'flex', }}>
                  <Feed.Content>
                    <Feed.Date style={{fontSize: '75%', color: '#8f8f8f'}}>
                      //TODO: Real TimeStamp Here
                    </Feed.Date>
                    <Feed.Extra 
                      text 
                      style={{ paddingBottom:'1vh', color: '#333333' }}>
                      { post.attributes.text }
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <div style={{ display: 'flex', }}>
                          <div style={styles.Likes_comments}>
                            <PostComment />
                          </div>
                          <div style={styles.Likes_comments}>
                            <PostLikes />
                          </div>
                          <div>
                            <Icon 
                              button 
                              color='black' 
                              name='edit' 
                              onClick={() => this.setEditPost(post)} 
                            />
                            {this.areYouSure(post.id)}
                          </div>
                        </div>
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </div>
              </div>
            </div>
          </div>
          <Divider style={{width: '100%', color: '#8f8f8f'}}/>
        </Feed.Event>
      </Segment>
    );
  }


  render() {
    const { editPost } = this.state;
    const { posts } = this.props;
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
            }}>
          </div>
          <div style={{padding: '30px'}}>
            <PostForm />
            <Feed>
              {this.listPosts(posts)}
              <PostEdit
                editPost={editPost}
                setEditPost={this.editPost}
              />
            </Feed>
          </div>
        </div>
      );
    } else {
      return (
        <Segment basic>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

const styles = {
  Likes_comments: {
    display: 'inline-flex', 
    paddingRight: '1vw', 
    fontSize: '75%', 
    color: '#8f8f8f',
  }
}

export default connect(mapStateToProps)(UserFeed);
