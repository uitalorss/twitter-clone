import { Title } from "../Title/Title";
import {Image, FollowAreaDiv, FollowAreaItem } from "./styles";
import news1 from '../../../src/assets/images/imageNews1.png';
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";


export function FollowArea(){
  const follow = [
    {
      id: 1,
      image: '../../../src/assets/images/user1.png',
      user: 'Bessie Cooper',
      tagname: '@alessandroveronezi'
    },
    {
      id: 2,
      image: '../../../src/assets/images/user2.png',
      user: 'Jenny Wilson',
      tagname: '@gabrielcantarin'
    }
  ]

  return(
    <FollowAreaDiv>
      <Title color={"txt-primary"}>Who to follow</Title>
      {follow.map(item => {
        return (
          <FollowAreaItem>
            <Image>
              <Avatar size="small" source={item.image} alt="Item de usuário para seguir" />
            </Image>
            <div>
              <a href="">
                <Title size="sm" color={"txt-primary"}>{item.user}</Title>
              </a>
              <span>{item.tagname}</span>
            </div>
            <Button size="small" color="transparent">Follow</Button>
          </FollowAreaItem>
        )
      })}
        <a className="more" href="404.html">show more</a>
    </FollowAreaDiv>
  )
}