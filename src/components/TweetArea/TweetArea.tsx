import imageUser from '../../../src/assets/imageUser.png';
import { ActionsTweet, ButtonIcon, Icons, TweetForm, TweetInput } from './styles';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';
import React, { useState } from 'react';

export function TweetArea (){
  const [tweetText, setTweetText] = useState('');

  function newNewTweetChange(event: React.ChangeEvent<HTMLTextAreaElement>){
    setTweetText(event.target.value)
  }

  const isTweetAreaEmpty = tweetText.length === 0;

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
    <TweetForm action="">
      <TweetInput>
        <Avatar size='normal' source={imageUser} alt="Avatar do usuário"/>
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