import styled from 'styled-components';

export const SearchBarField = styled.div`
  display: flex;
  gap: 0 1rem;
  padding: .5rem 1rem;
  background: ${props => props.theme.colors.secondary};
  border-radius: 100px;
  &:hover{
    border: 2px solid ${props => props.theme.colors.accent}
  }
  input{
    font-family: 'Poppins', sans-serif;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.textOption};
    font-weight: 500;
    font-size: 15px;
    &::placeholder{
      color: ${props => props.theme.colors.textOption};
      font-weight: 400;
      font-size: 15px;
    }
  }
`