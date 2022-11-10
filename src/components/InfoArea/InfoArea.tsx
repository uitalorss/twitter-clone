import { Title } from "../Title/Title";
import { InfoAreaDiv, InfoAreaItem, Image } from "./styles";
import { Link } from "react-router-dom";


export function InfoArea(){

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
      <Title color="txt-primary">What's Happening</Title>
      {news.map(item => {
        return (
          <InfoAreaItem>
            <div>
              <span>{item.topic.description} ° {item.topic.hour}</span>
              <Link to='404'>{item.content.content}</Link>
              <span>{item.content.trend}</span>
            </div>
            <Image>
              <img src={item.content.image} alt="" />
            </Image>
          </InfoAreaItem>
        )
      })}
      <Link to='404' className="more">show more</Link>
    </InfoAreaDiv>
  )
}