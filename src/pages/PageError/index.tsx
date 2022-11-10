import { Container } from "./styles"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { SideMenu } from "../../components/SideMenu"
import { Error } from "../../components/Error";

interface HomeProps{
  changeTheme(): void;
}

export function PageError({changeTheme}: HomeProps){
  return(
      <Container>
        <SideMenu />
        <Error changeTheme={changeTheme}/>
        <Sidebar />
      </Container>
  )
}