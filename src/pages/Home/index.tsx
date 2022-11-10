import { useState } from "react"
import { Feed } from "../../components/Feed"
import { Container } from "./styles"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { SideMenu } from "../../components/SideMenu/SideMenu"
import { IntTweets } from "../../types/tweets"

interface HomeProps{
  changeTheme(): void;
}

export function Home({changeTheme}: HomeProps){

  const [tweets, setTweets] = useState<IntTweets[]>([
    {
      id: 1,
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
          icon: false,
          counter: 0
        },
        retweet: {
          icon: false,
          counter: 0
        },
        like: {
          icon: false,
          counter: 3
        },
        share: {
          icon: false,
          counter: 0
        }
      }
    },
    {
      id: 2,
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
          icon: false,
          counter: 1
        },
        retweet: {
          icon: false,
          counter: 25
        },
        like: {
          icon: false,
          counter: 2
        },
        share: {
          icon: false,
          counter: 4
        }
      }
    }
  ])
  return(
      <Container>
        <SideMenu />
        <Feed changeTheme={changeTheme} tweets={tweets} setTweets={setTweets}/>
        <Sidebar />
      </Container>
  )
}