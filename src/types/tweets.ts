export interface IntTweets {
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
      icon: string,
      counter: number
    },
    retweet: {
      icon: string,
      counter: number
    },
    like: {
      icon: string,
      selected: false,
      counter: number
    },
    share: {
      icon: string,
      counter: number
    }
  }
}