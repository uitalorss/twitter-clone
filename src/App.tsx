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


export function App() {
  const [theme, setTheme] = useState(dark);
  const [tweets, setTweets] = useState<IntTweets[]>([
    {
      info: {
        imgUser: '../../../src/assets/images/user3.png',
        user: 'Devon Lane',
        tagUser: '@johndue',
        time: 'string',
      },
      content: {
        tweetContent: 'Isso é um teste',
      },
      actions: {
        reply: {
          icon: '../../../src/assets/icons/tweets/comment.svg',
          counter: 0
        },
        retweet: {
          icon: '../../../src/assets/icons/tweets/retweet.svg',
          counter: 0
        },
        like: {
          icon: '../../../src/assets/icons/tweets/like.svg',
          selected: false,
          counter: 3
        },
        share: {
          icon: '../../../src/assets/icons/tweets/share.svg',
          counter: 0
        }
      }
    },
    {
      info: {
        imgUser: '../../../src/assets/images/user4.png',
        user: 'Darlene Robertson',
        tagUser: '@johndue',
        time: 'string',
      },
      content: {
        tweetContent: 'Isso é outro teste',
      },
      actions: {
        reply: {
          icon: '../../../src/assets/icons/tweets/comment.svg',
          counter: 1
        },
        retweet: {
          icon: '../../../src/assets/icons/tweets/retweet.svg',
          counter: 25
        },
        like: {
          icon: '../../../src/assets/icons/tweets/retweet.svg',
          selected: false,
          counter: 2
        },
        share: {
          icon: '../../../src/assets/icons/tweets/share.svg',
          counter: 4
        }
      }
    }
  ])

  const changeTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark )
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SideMenu />
        <Feed changeTheme={changeTheme} tweets={tweets}/>
        <Sidebar />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}


