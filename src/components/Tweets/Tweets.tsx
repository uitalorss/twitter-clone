import { IntTweets } from "../../types/tweets";
import { Avatar } from "../Avatar/Avatar";
import { Title } from "../Title/Title";
import { ListTweets, Tweet, InfoUser, TweetInfo, TweetContent, TweetActions, TweetIcons } from "./styles";
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {MdIosShare} from 'react-icons/md'

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
                 <FaRegComment size={24}/>
                </TweetIcons>
                <TweetIcons>
                 <AiOutlineRetweet size={24}/>
                </TweetIcons>
                <TweetIcons>
                 <AiOutlineHeart size={24}/>
                </TweetIcons>
                <TweetIcons>
                 <MdIosShare size={24} />
                </TweetIcons>
              </TweetActions>
            </TweetInfo>
          </Tweet>
        )
      })}
    </ListTweets>
  )
}