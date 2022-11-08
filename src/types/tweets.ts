export interface IntTweets {
  id: number,
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
    reply: {
      icon: boolean,
      counter: number
    },
    retweet: {
      icon: boolean,
      counter: number
    },
    like: {
      icon: boolean,
      counter: number
    },
    share: {
      icon: boolean,
      counter: number
    }
  }
}