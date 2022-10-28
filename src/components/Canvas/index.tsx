import {Container} from './styles';
import { SideMenu } from '../SideMenu';
import { Feed } from '../Feed';
import { Sidebar } from '../Sidebar';
export function Canvas(){
  return(
    <Container>
      <SideMenu></SideMenu>
      <Feed></Feed>
      <Sidebar></Sidebar>
    </Container>
  )
}