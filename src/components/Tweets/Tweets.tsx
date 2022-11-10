import { IntTweets } from "../../types/tweets";
import { Avatar } from "../Avatar/Avatar";
import { Title } from "../Title/Title";
import { ListTweets, Tweet, InfoUser, TweetInfo, TweetContent, TweetActions, TweetIcons } from "./styles";
import {AiOutlineHeart, AiFillHeart, AiOutlineRetweet} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {MdIosShare} from 'react-icons/md'
import { useEffect } from "react";

export interface TweetsProps {
  tweets: IntTweets[];
  setTweets: React.Dispatch<React.SetStateAction<IntTweets[]>>;
}

export function Tweets({tweets, setTweets}: TweetsProps){

  function handleLike(id: number){
    let updateList: any = tweets.map(tweet => {
      if(tweet.id === id){
        const path = tweet;
        path.actions.like.icon = !tweet.actions.like.icon;
        path.actions.like.icon ? path.actions.like.counter++ : path.actions.like.counter--;
        return {...path}
      }
      return tweet;
    })
    setTweets(updateList)
    localStorage.setItem("tweets", JSON.stringify(tweets))
  }

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
                  <TweetIcons onClick={() => handleLike(item.id)}>
                 {!item.actions.like.icon ? 
                  <AiOutlineHeart size={24}/> 
                  : 
                  <AiFillHeart style={{fill: '#c0392b'}} size={24}/>}
                  <span>{item.actions.like.counter}</span>
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