import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useState } from "react";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";


export function App() {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark )
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SideMenu />
        <Feed changeTheme={changeTheme} />
        <Sidebar />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}


