import { Title } from "../Title/Title";
import { Container, Header } from "./styles";
import theme from '../../../src/assets/icons/changeTheme.svg'
import { TweetArea } from "../TweetArea/TweetArea";
import { ButtonIcon } from "../TweetArea/styles";

interface FeedProps {
  changeTheme(): void 
}

export function Feed({changeTheme}: FeedProps){
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
    </Container>
  )
}