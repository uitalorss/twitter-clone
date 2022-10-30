import { Title } from "../Title/Title";
import { Container, Header } from "./styles";
import {ReactComponent as ChangeTheme} from '../../../src/assets/icons/changeTheme.svg'

export function Feed(){
  return(
    <Container>
      <Header>
        <Title color="white">Home</Title>
        <ChangeTheme />
      </Header>
    </Container>
  )
}