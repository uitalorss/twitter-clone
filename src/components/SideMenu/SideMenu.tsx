import { Bottom, Top, Container, ButtonNavItem } from './styles';
import logoTwitterDark from '../../assets/twitterDark.svg';
import {ReactComponent as BtnHome}  from '../../../src/assets/icons/home.svg';
import {ReactComponent as BtnExplore} from '../../../src/assets/icons/explore.svg';
import {ReactComponent as BtnNotifications }  from '../../../src/assets/icons/notifications.svg';
import {ReactComponent as BtnMessages }  from '../../../src/assets/icons/messages.svg';
import {ReactComponent as BtnBookmarks }  from '../../../src/assets/icons/bookmarks.svg';
import {ReactComponent as BtnLists}  from '../../../src/assets/icons/lists.svg';
import {ReactComponent as BtnProfile }  from '../../../src/assets/icons/profile.svg';
import {ReactComponent as BtnMore }  from '../../../src/assets/icons/more.svg';
import {ReactComponent as BtnMore2 }  from '../../../src/assets/icons/more2.svg';
import imageUser from '../../../src/assets/imageUser.png';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Avatar } from '../Avatar/Avatar';
 

export function SideMenu(){
  return(
    <Container>
      <Top>
        <img className='logo' src={logoTwitterDark} alt="logo do Twitter" />
        <div className='sideMenu'>
          <ButtonNavItem>
            <BtnHome />
            <Title color='txt-primary'>Home</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnExplore />
            <Title color='txt-primary'>Explore</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnNotifications />
            <Title color='txt-primary'>Notifications</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnMessages />
            <Title color='txt-primary'>Messages</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnLists />
            <Title color='txt-primary'>Lists</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnProfile />
            <Title color='txt-primary'>Profile</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnMore />
            <Title color='txt-primary'>More</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnBookmarks />
            <Title color='txt-primary'>Bookmarks</Title>
          </ButtonNavItem>
        </div>

        <Button size='large'>Tweet</Button>
      </Top>
      <Bottom>
        <Avatar size='small' source={imageUser} alt="Avatar do usuário" />
          <div>
            <Title size='sm' color='txt-primary'>Jerome Bell</Title>
            <span>@jeromeBell</span>
          </div>
        <BtnMore2 path='' />
      </Bottom>
    </Container>
  )
}