import imageUser from '../../../src/assets/imageUser.png';
import { ActionsTweet, ButtonIcon, Icons, TweetForm, TweetInput } from './styles';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';
import React, { useEffect, useState } from 'react';
import { IntTweets } from '../../types/tweets';
import AiOutlineHeart from 'react-icons';

export interface TweetAreaProps {
  tweets: IntTweets[];
  setTweets: React.Dispatch<React.SetStateAction<IntTweets[]>>;
}

export function TweetArea ({tweets, setTweets}: TweetAreaProps){
  const [tweetText, setTweetText] = useState('');

  function newNewTweetChange(event: React.ChangeEvent<HTMLTextAreaElement>){
    event.preventDefault();
    setTweetText(event.target.value)
  }

  function handleNewTweet(event: any){
    event.preventDefault();
    if(localStorage.getItem('tweets')){
      setTweets([{
        id: tweets.length + 1,
        info: {
          imgUser: '../../../src/assets/imageUser.png',
          user: 'Jerome Bell',
          tagUser: '@jeromeBell',
          time: "indefinida",
        },
        content: {
          tweetContent: tweetText,
        },
        actions: {
          reply: {
            icon: false,
            counter: 0
          },
          retweet: {
            icon: false,
            counter: 0
          },
          like: {
            icon: false,
            counter: 0
          },
          share: {
            icon: false,
            counter: 0
          }
        }
      }, ...tweetsLocalStorage])
    }
    clearTweetArea();
    localStorage.setItem("tweets", JSON.stringify(tweets))
  }

  let tweetsLocalStorage = JSON.parse(localStorage.getItem('tweets') || '');


  function getTweets(){
    console.log(tweets)
  }

  const isTweetAreaEmpty = tweetText.length === 0;

  function clearTweetArea(){
    setTweetText('');
  }

  const icons = [
    {
      name: 'media',
      image: '../../../src/assets/icons/tweet/media.svg'
    },
    {
      name: 'emoji',
      image: '../../../src/assets/icons/tweet/emoji.svg'
    },
    {
      name: 'gif',
      image: '../../../src/assets/icons/tweet/gif.svg'
    },
    {
      name: 'poll',
      image: '../../../src/assets/icons/tweet/poll.svg'
    },
    {
      name: 'schedule',
      image: '../../../src/assets/icons/tweet/schedule.svg'
    },
  ]


  return (
    <TweetForm onSubmit={handleNewTweet}>
      <TweetInput>
        <Avatar size='normal' source={imageUser} alt="Avatar do usu??rio"/>
        <textarea 
          name="" 
          id=""
          placeholder="What's happening?"
          maxLength={380}
          value={tweetText}
          onChange={newNewTweetChange}
        >
        </textarea>
      </TweetInput>
      <ActionsTweet>
        <Icons>
          {icons.map(item => {
            return (
              <ButtonIcon style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: 'no-repeat'
              }}></ButtonIcon>
            )
          })}
        </Icons>
        <Button 
          size='normal' 
          disabled={isTweetAreaEmpty ? true : false}
          >Tweet</Button>
      </ActionsTweet>
    </TweetForm>
  )
}