import React from 'react'
import { Feed, Image, Segment, Divider } from 'semantic-ui-react'
import { getDate } from '../../utils/date'

import PostDelete from './PostDelete'
import PostComment from './PostComment'
import PostLikes from './PostLikes'
import PostEdit from './PostEdit'

export default ({ posts, dispatch }) => {
  return posts.posts.map((post, i) =>
    <Segment key={i}>
      <Feed.Event>
        <div style={{ display: 'flex' }}>
          <div>
            <div>
              <Image
                src={require('../../assets/images/teamimg1.png')}
                style={{ paddingRight: '15px' }} />
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div>
              <div style={{ display: 'flex', paddingBottom: '1vh' }}>
                <Feed.Label>
                  {post.userName}
                </Feed.Label>
              </div>

              <div style={{ display: 'flex' }}>
                <Feed.Content>
                  <Feed.Date style={{fontSize: '75%', color: '#8f8f8f'}}>
                    {getDate(post.date)}
                  </Feed.Date>
                  <Feed.Extra
                    text
                    style={{ paddingBottom: '1vh', color: '#333333' }}>
                    { post.text }
                  </Feed.Extra>

                  <Feed.Meta>
                    <Feed.Like>
                      <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                          <span>
                            <PostComment />
                          </span>
                          <span>
                            <PostLikes />
                          </span>
                          <span>
                            <PostEdit id={post.id} text={post.text} />
                          </span>                         
                          <span>
                            <PostDelete id={post.id} dispatch={dispatch} />
                          </span>
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
