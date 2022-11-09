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
  span{
    color: ${props => props.theme.colors.textOption}
  }
`
export const TweetContent = styled.div`
p{
  color: ${props => props.theme.colors.text}
}
`

export const TweetActions = styled.div`
  display: flex;
  gap: 0 6rem;
`
export const TweetIcons = styled.button`
  display: flex;
  align-items: center;
  gap: 0 .5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  svg{
    fill: ${props => props.theme.colors.text};
  }
  span{
    color: ${props => props.theme.colors.text};
  }
`

export const InfoUser = styled.div`
  display: flex;
  gap: 0 .5rem;
`