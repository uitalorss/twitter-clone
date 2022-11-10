import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useState } from "react";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { IntTweets } from "./types/tweets";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";


export function App() {
  const [theme, setTheme] = useState(dark);
  function changeTheme() {
    setTheme(theme.title === 'dark' ? light : dark )
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router changeTheme={changeTheme}/>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


