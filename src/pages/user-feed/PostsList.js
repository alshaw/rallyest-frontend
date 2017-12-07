import React, {Component} from 'react'
import {
  Feed,
  Image,
  Segment,
  Icon,
  Divider
} from 'semantic-ui-react'

import AreYouSure from './AreYouSure'
import PostComment from './PostComment'
import PostLikes from './PostLikes'

export default class PostsList extends Component {
  constructor () {
    super()

    this.state = {
      editPost: ''
    }
  }
  render () {
    const { posts } = this.props

    return posts.posts.map(post =>
      <Segment key={post.id}>
        <Feed.Event>
          <div style={{ display: 'flex' }}>
            <div>
              <div>
                <Image
                  src={require('../../assets/images/teamimg1.png')}
                  style={{ paddingRight: '15px' }}
                  />
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div>
                <div style={{ display: 'flex', paddingBottom: '1vh' }}>
                  <Feed.Label>
                    //TODO: User Name Here
                  </Feed.Label>
                </div>

                <div style={{ display: 'flex' }}>
                  <Feed.Content>
                    <Feed.Date style={{fontSize: '75%', color: '#8f8f8f'}}>
                      //TODO: Real TimeStamp Here
                    </Feed.Date>

                    <Feed.Extra
                      text
                      style={{ paddingBottom: '1vh', color: '#333333' }}>
                      { post.attributes.text }
                    </Feed.Extra>

                    <Feed.Meta>
                      <Feed.Like>
                        <div style={{ display: 'flex' }}>
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
                            <AreYouSure id={post.id} />
                          </div>
                        </div>
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </div>
              </div>
            </div>
          </div>
          <Divider style={{width: '100%', color: '#8f8f8f'}} />
        </Feed.Event>
      </Segment>
    )
  }

  setEditPost (id) {
    this.setState({ editPost: id })
  }
}

const styles = {
  Likes_comments: {
    display: 'inline-flex',
    paddingRight: '1vw',
    fontSize: '75%',
    color: '#8f8f8f'
  }
}
