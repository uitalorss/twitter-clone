import { useState } from "react"
import { Person } from "../../components/Person"
import { Container } from "./styles"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { SideMenu } from "../../components/SideMenu"
import dark from "../../styles/themes/dark"
import light from "../../styles/themes/light"

interface ProfileProps{
  changeTheme(): void;
}

export function Profile({changeTheme}: ProfileProps){
  return(
      <Container>
        <SideMenu />
        <Person changeTheme={changeTheme}/>
        <Sidebar />
      </Container>
  )
}