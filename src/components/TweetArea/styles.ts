import styled from "styled-components";

export const TweetForm = styled.form`
  display: grid;
  padding-bottom: 1rem;
  border-top: 2px solid ${props => props.theme.colors.secondary}; 
  border-bottom: 2px solid ${props => props.theme.colors.secondary}; 
`

export const TweetInput = styled.form`
  display: flex;
  padding: 1rem;
  gap: 0 1.5rem;
  textarea{
    resize: none;
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
    &::placeholder{
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 500;
      color: ${props => props.theme.colors.textOption};
    }
  }
`

export const ActionsTweet = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 6rem;
  margin-right: 2rem;
  justify-content: space-between;
`

export const Icons = styled.div`
  display: flex;
  gap: 0 1rem;
`

export const ButtonIcon = styled.button`
  width: 28px;
  height: 28px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`