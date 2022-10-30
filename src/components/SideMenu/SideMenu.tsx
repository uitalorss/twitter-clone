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
import { ButtonNav } from '../ButtonNav/ButtonNav';

 

export function SideMenu(){
  return(
    <Container>
      <Top>
        <img className='logo' src={logoTwitterDark} alt="logo do Twitter" />
        <div className='sideMenu'>
          <ButtonNavItem>
            <BtnHome />
            <Title color='white'>Home</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnExplore />
            <Title color='white'>Explore</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnNotifications />
            <Title color='white'>Notifications</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnMessages />
            <Title color='white'>Messages</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnLists />
            <Title color='white'>Lists</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnProfile />
            <Title color='white'>Profile</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnMore />
            <Title color='white'>More</Title>
          </ButtonNavItem>

          <ButtonNavItem>
            <BtnBookmarks />
            <Title color='white'>Bookmarks</Title>
          </ButtonNavItem>
        </div>

        <Button size='large'>Tweet</Button>
      </Top>
      <Bottom>
        <img src={imageUser} alt="" />
          <div>
            <Title size='sm' color='white'>Jerome Bell</Title>
            <span>@jeromeBell</span>
          </div>
        <BtnMore2 path='' />
      </Bottom>
    </Container>
  )
}