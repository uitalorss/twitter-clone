import { Avatar } from "../Avatar/Avatar";
import { Title } from "../Title/Title";
import { ListTweets, Tweet, InfoUser, TweetInfo, TweetContent, TweetActions, TweetIcons } from "./styles";

export function Tweets(){
  const tweets = [
    {
      info: {
        imgUser: '../../../src/assets/images/user3.png',
        user: 'Devon Lane',
        tagUser: '@johndue',
        time: 'string',
      },
      content: {
        tweetContent: 'Isso é um teste',
      },
      actions: {
        reply: {
          icon: '../../../src/assets/icons/tweets/comment.svg',
          counter: 0
        },
        retweet: {
          icon: '../../../src/assets/icons/tweets/retweet.svg',
          counter: 0
        },
        like: {
          icon: '../../../src/assets/icons/tweets/like.svg',
          selected: false,
          counter: 3
        },
        share: {
          icon: '../../../src/assets/icons/tweets/share.svg',
          counter: 0
        }
      }
    },
    {
      info: {
        imgUser: '../../../src/assets/images/user4.png',
        user: 'Darlene Robertson',
        tagUser: '@johndue',
        time: 'string',
      },
      content: {
        tweetContent: 'Isso é outro teste',
      },
      actions: {
        reply: {
          icon: '../../../src/assets/icons/tweets/comment.svg',
          counter: 1
        },
        retweet: {
          icon: '../../../src/assets/icons/tweets/retweet.svg',
          counter: 25
        },
        like: {
          icon: '../../../src/assets/icons/tweets/like.svg',
          selected: false,
          counter: 2
        },
        share: {
          icon: '../../../src/assets/icons/tweets/share.svg',
          counter: 4
        }
      }
    },

  ]
  
  return (
    <ListTweets>
      {tweets.map(item => {
        return(
          <Tweet>
            <div className="avatar">
              <Avatar size="small" source={item.info.imgUser}></Avatar>
            </div>
            <TweetInfo>
              <InfoUser className="infoUser">
                <Title color="txt-primary" size="sm">{item.info.user}</Title>
                <span className="tagname">{item.info.tagUser}</span>
              </InfoUser>
              <TweetContent>
                <p>{item.content.tweetContent}</p>
              </TweetContent>
              <TweetActions>
                <TweetIcons>
                 <img src={item.actions.reply.icon} alt="" />
                 <span>{item.actions.reply.counter}</span>
                </TweetIcons>
                <TweetIcons>
                 <img src={item.actions.retweet.icon} alt="" />
                 <span>{item.actions.retweet.counter}</span>
                </TweetIcons>
                <TweetIcons>
                 <img src={item.actions.like.icon} alt="" />
                 <span>{item.actions.like.counter}</span>
                </TweetIcons>
                <TweetIcons>
                 <img src={item.actions.share.icon} alt="" />
                 <span>{item.actions.share.counter}</span>
                </TweetIcons>
              </TweetActions>
            </TweetInfo>
          </Tweet>
        )
      })}
    </ListTweets>
  )
}