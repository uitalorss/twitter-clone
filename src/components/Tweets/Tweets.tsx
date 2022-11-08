import { IntTweets } from "../../types/tweets";
import { Avatar } from "../Avatar/Avatar";
import { Title } from "../Title/Title";
import { ListTweets, Tweet, InfoUser, TweetInfo, TweetContent, TweetActions, TweetIcons } from "./styles";

export interface TweetsProps {
  tweets: IntTweets[];
}

export function Tweets({tweets}: TweetsProps){
  
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
                </TweetIcons>
                <TweetIcons>
                 <img src={item.actions.retweet.icon} alt="" />
                </TweetIcons>
                <TweetIcons>
                 <img src={item.actions.like.icon} alt="" />
                </TweetIcons>
                <TweetIcons>
                 <img src={item.actions.share.icon} alt="" />
                </TweetIcons>
              </TweetActions>
            </TweetInfo>
          </Tweet>
        )
      })}
    </ListTweets>
  )
}