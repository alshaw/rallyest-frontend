import React from 'react'
import { Feed, Image, Segment, Divider } from 'semantic-ui-react'

import AreYouSure from './AreYouSure'
import PostComment from './PostComment'
import PostLikes from './PostLikes'
import PostEdit from './PostEdit'

export default ({ posts }) => {
  console.log(posts.posts)
  return posts.posts.map(post =>
    <Segment key={post.id}>
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
                        <div>
                          <PostComment />
                          <PostLikes />
                          <PostEdit id={post.id} text={post.text} />
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

// const styles = {
//   Likes_comments: {
//     display: 'inline-flex',
//     paddingRight: '1vw',
//     fontSize: '75%',
//     color: '#8f8f8f'
//   }
// }
