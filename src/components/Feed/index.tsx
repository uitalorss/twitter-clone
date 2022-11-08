import { Title } from "../Title/Title";
import { Container, Header } from "./styles";
import theme from '../../../src/assets/icons/changeTheme.svg'
import { TweetArea } from "../TweetArea/TweetArea";
import { ButtonIcon } from "../TweetArea/styles";
import { Tweets } from "../Tweets/Tweets";
import { IntTweets } from "../../types/tweets";

interface FeedProps {
  changeTheme(): void;
  tweets: IntTweets[];
}

export function Feed({changeTheme, tweets}: FeedProps){
  return(
    <Container>
      <Header>
        <Title color="txt-primary">Home</Title>
        <ButtonIcon onClick={changeTheme} style={{
          backgroundImage: `url(${theme})`,
          backgroundRepeat: 'no-repeat'
        }}
        >
        </ButtonIcon>
      </Header>
      <TweetArea />
      <Tweets tweets={tweets}/>
    </Container>
  )
}