import imageUser from '../../../src/assets/imageUser.png';
import { ActionsTweet, ButtonIcon, Icons, TweetForm, TweetInput } from './styles';
import media from '../../../src/assets/icons/tweet/media.svg';
import emoji from '../../../src/assets/icons/tweet/emoji.svg';
import gif from '../../../src/assets/icons/tweet/gif.svg';
import poll from '../../../src/assets/icons/tweet/poll.svg';
import schedule from '../../../src/assets/icons/tweet/schedule.svg';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';
import React, { useState } from 'react';


export function TweetArea (){
  const [tweetText, setTweetText] = useState('');

  function newNewTweetChange(event: React.ChangeEvent<HTMLTextAreaElement>){
    setTweetText(event.target.value)
  }

  const isTweetAreaEmpty = tweetText.length === 0;

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
        <ButtonIcon style={{
          backgroundImage: `url(${media})`,
          backgroundRepeat: 'no-repeat'
        }}></ButtonIcon>
          <ButtonIcon style={{
          backgroundImage: `url(${gif})`,
          backgroundRepeat: 'no-repeat'
        }}></ButtonIcon>
          <ButtonIcon style={{
          backgroundImage: `url(${poll})`,
          backgroundRepeat: 'no-repeat'
        }}></ButtonIcon>
          <ButtonIcon style={{
          backgroundImage: `url(${emoji})`,
          backgroundRepeat: 'no-repeat'
        }}></ButtonIcon>
          <ButtonIcon style={{
          backgroundImage: `url(${schedule})`,
          backgroundRepeat: 'no-repeat'
        }}></ButtonIcon>
        </Icons>
        <Button 
          size='normal' 
          disabled={isTweetAreaEmpty ? true : false}
          >Tweet</Button>
      </ActionsTweet>
    </TweetForm>
  )
}