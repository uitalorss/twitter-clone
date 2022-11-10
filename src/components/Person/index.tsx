import { Title } from "../Title/Title";
import { Container, Description, Header } from "./styles";
import theme from '../../../src/assets/icons/changeTheme.svg'
import { ButtonIcon } from "../TweetArea/styles";

interface PersonProps {
  changeTheme(): void;
}

export function Person({changeTheme}: PersonProps){
  const user = {
    cover: '../../../src/assets/cover-profile.svg',
    imgUser: '../../../src/assets/imageUser.png',
    name: 'Jerome Bell',
    tagname: '@afonsoinocente',
    about: 'Product Designer',
    location: 'London',
    schedule: 'Joined September 2011',
    following: 569,
    followers: 72
  }
  return(
    <Container>
      <Header>
        <Title color="txt-primary">User</Title>
        <ButtonIcon onClick={changeTheme} style={{
          backgroundImage: `url(${theme})`,
          backgroundRepeat: 'no-repeat'
        }}
        >
        </ButtonIcon>
      </Header>
      <Description>
        <img className="cover" src={user.cover} alt="" />
        <div className="about">
          <img src={user.imgUser} alt="" />
          <Title color="txt-primary">{user.name}</Title>
          <span className="tag">{user.tagname}</span>
          <span className="descAbout">{user.about}</span>
          <div className="information">
            <span>{user.location}</span>
            <span>{user.schedule}</span>
          </div>
          <div className="follow">
            <span><Title color="txt-primary" size="sm">{user.following}</Title> Following</span>
            <span><Title color="txt-primary" size="sm">{user.followers}</Title> Followers</span>
          </div>
        </div>
      </Description>
    </Container>
  )
}