import { Bottom, Top, Container, ButtonNavItem, Icon } from './styles';
import logoTwitterDark from '../../assets/twitterDark.svg';
import imageUser from '../../../src/assets/imageUser.png';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Avatar } from '../Avatar/Avatar';
 

export function SideMenu(){
  const menuIcons = [
    {
      name: 'Home',
      source: '../../../src/assets/icons/home.svg'
    },
    {
      name: 'Explore',
      source: '../../../src/assets/icons/explore.svg'
    },
    {
      name: 'Notifications',
      source: '../../../src/assets/icons/notifications.svg'
    },
    {
      name: 'Messages',
      source: '../../../src/assets/icons/messages.svg'
    },
    {
      name: 'Bookmarks',
      source: '../../../src/assets/icons/bookmarks.svg'
    },
    {
      name: 'Lists',
      source: '../../../src/assets/icons/lists.svg'
    },
    {
      name: 'Profile',
      source: '../../../src/assets/icons/profile.svg'
    },
    {
      name: 'More',
      source: '../../../src/assets/icons/more.svg'
    },
  ]

  return(
    <Container>
      <Top>
        <img className='logo' src={logoTwitterDark} alt="logo do Twitter" />
        <div className='sideMenu'>
          {menuIcons.map(item => {
            return(
              <ButtonNavItem>
                <Icon style={{
                  backgroundImage: `url(${item.source})`
                }}>
                </Icon>
                <Title color='txt-primary'>{item.name}</Title> 
              </ButtonNavItem>
            )
          })}
        </div>
        <Button size='large'>Tweet</Button>
      </Top>
      <Bottom>
        <Avatar size='small' source={imageUser} alt="Avatar do usuário" />
          <div>
            <Title size='sm' color='txt-primary'>Jerome Bell</Title>
            <span>@jeromeBell</span>
          </div>
      </Bottom>
    </Container>
  )
}