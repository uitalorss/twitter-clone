import { Title } from "../Title/Title";
import {FollowAreaDiv, FollowAreaItem } from "./styles";
import news1 from '../../../src/assets/images/imageNews1.png';
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";
import { Link } from "react-router-dom";


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
            <Avatar size="small" source={item.image} alt="Item de usuário para seguir" />
            <div>
              <Link to='404'>
                <Title size="sm" color={"txt-primary"}>{item.user}</Title>
              </Link>
              <span>{item.tagname}</span>
            </div>
            <Button size="small" color="transparent">Follow</Button>
          </FollowAreaItem>
        )
      })}

      <Link to='404' className="more">show more</Link>
    </FollowAreaDiv>
  )
}