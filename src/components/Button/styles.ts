import styled from "styled-components";


export const ButtonContent = styled.button`
  font-family: 'Poppins', sans-serif;
  &.button {
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 100px;
    font-weight: 700;
    text-align: center;
  }

  &.button--small {
    font-size: 13px;
    padding: .25rem .5rem;
  }

  &.button--normal {
    font-size: 15px;
    padding: .625rem 1rem;
  }

  &.button--large {
    font-size: 19px;
    max-width: 250px;
    padding: .75rem;
  }

  &.disabled{
    opacity: 50%;
    cursor: none;
  }

  &.button--color--primary{
    background: ${props => props.theme.colors.accent};
    color: #ffffff;
    &:hover{
      opacity: 90%;
      transition: .3s;
    }
  }

  &.button--color--option{
    background: #ffffff;
    color: #000000;
    border:  #ffffff;
  }

  &.button--color--transparent{
    background: transparent;
    color: ${props => props.theme.colors.accent};
    border: 2px solid ${props => props.theme.colors.accent};
    &:hover{
      background: ${props => props.theme.colors.text};
      border: 2px solid ${props => props.theme.colors.text};
      transition: .3s;
    }
  }
`