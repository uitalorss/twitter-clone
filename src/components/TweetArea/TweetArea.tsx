import imageUser from '../../../src/assets/imageUser.png';
import { ActionsTweet, ButtonIcon, Icons, TweetForm, TweetInput } from './styles';
import media from '../../../src/assets/icons/tweet/media.svg';
import emoji from '../../../src/assets/icons/tweet/emoji.svg';
import gif from '../../../src/assets/icons/tweet/gif.svg';
import poll from '../../../src/assets/icons/tweet/poll.svg';
import schedule from '../../../src/assets/icons/tweet/schedule.svg';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';


export function TweetArea (){
  return (
    <TweetForm action="">
      <TweetInput>
        <Avatar size='normal' source={imageUser} alt="Avatar do usuário"/>
        <textarea 
          name="" 
          id=""
          placeholder="What's happening?"
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
        <Button size='normal'>Tweet</Button>
      </ActionsTweet>
    </TweetForm>
  )
}