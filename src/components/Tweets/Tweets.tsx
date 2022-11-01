import { ListTweets } from "./styles";

export function Tweets(){
  const tweets: [
    {
      tweet: {
        info: {
          imgUser: string,
          user: string,
          tagUser: string,
          time: string,
        },
        content: {
          tweetContent: string,
        },
        actions: {
          reply: void,
          retweet: void,
          like: void,
        }
      }
    }
  ]
  
  return (
    <ListTweets>
      {tweets.map(item => {
        return(

        )
      })}
    </ListTweets>
  )
}