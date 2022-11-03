import styled from 'styled-components';

export const ListTweets = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tweet = styled.div`
  display: flex;
  gap: 0 1rem;
  margin: 1rem 0;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.secondary}
`

export const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem 0;
  width: 100%;
`
export const TweetContent = styled.div`
`

export const TweetActions = styled.div`
  display: flex;
  gap: 0 6rem;
`
export const TweetIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0 .5rem;
`

export const InfoUser = styled.div`
  display: flex;
  gap: 0 .5rem;
`