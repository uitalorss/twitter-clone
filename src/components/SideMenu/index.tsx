import { ButtonMenu } from '../../components/ButtonMenu'
import { Bottom, Top, Container } from './styles';
import logoTwitterDark from '../../assets/twitterDark.svg';
import btnHome from '../../../src/assets/DarkTheme/home.svg';
import btnExplore from '../../../src/assets/DarkTheme/explore.svg';
import btnNotifications from '../../../src/assets/DarkTheme/notifications.svg';
import btnMessages from '../../../src/assets/DarkTheme/messages.svg';
import btnBookmarks from '../../../src/assets/DarkTheme/bookmarks.svg';
import btnLists from '../../../src/assets/DarkTheme/lists.svg';
import btnProfile from '../../../src/assets/DarkTheme/profile.svg';
import btnMore from '../../../src/assets/DarkTheme/more.svg';
import { Button } from '../Button';

 

export function SideMenu(){
  return(
    <Container>
      <Top>
        <img className='logo' src={logoTwitterDark} alt="logo do Twitter" />
        <ButtonMenu image={btnHome} label="Home"/>
        <ButtonMenu image={btnExplore} label="Explore"/>
        <ButtonMenu image={btnNotifications} label="Notifications"/>
        <ButtonMenu image={btnMessages} label="Messages"/>
        <ButtonMenu image={btnBookmarks} label="Bookmarks"/>
        <ButtonMenu image={btnLists} label="Lists"/>
        <ButtonMenu image={btnProfile} label="Profile"/>
        <ButtonMenu image={btnMore} label="More"/>
        <Button name="Tweet"/>
      </Top>
      <Bottom></Bottom>
    </Container>
  )
}