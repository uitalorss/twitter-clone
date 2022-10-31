import { Title } from "../Title/Title";
import { InfoAreaDiv, InfoAreaItem, Image } from "./styles";
import news1 from '../../../src/assets/images/imageNews1.png';


export function InfoArea(){
  /* Propriedades da notícia 
  id,
  topico
  ancora com a noticia
  imagem
  trending
  */

  const news = [
    {
      id: 1,
      topic: {
        description: "COVID 19",
        hour: "Last night"
      },
      content: {
        content: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
        image: '../../../src/assets/images/imageNews1.png',
        trend: 'Trending with #covid19'
      }
    },
    {
      id: 2,
      topic: {
        description: "US",
        hour: "4h ago"
      },
      content: {
        content: 'Parler may go offline following suspensions by Amazon, Apple and Google',
        image: '../../../src/assets/images/imageNews2.png',
        trend: 'Trending with #trump'
      }
    },
    {
      id: 3,
      topic: {
        description: "India",
        hour: "1h ago"
      },
      content: {
        content: 'India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test',
        image: '../../../src/assets/images/imageNews3.png',
        trend: 'Trending with #sport'
      }
    }
  ]

  return(
    <InfoAreaDiv>
      <Title color="white">What's Happening</Title>
      {news.map(item => {
        return (
          <InfoAreaItem>
            <div>
              <span>{item.topic.description} ° {item.topic.hour}</span>
              <a href="404.html">{item.content.content}</a>
              <span>{item.content.trend}</span>
            </div>
            <Image>
              <img src={item.content.image} alt="" />
            </Image>
          </InfoAreaItem>
        )
      })}
    </InfoAreaDiv>
  )
}