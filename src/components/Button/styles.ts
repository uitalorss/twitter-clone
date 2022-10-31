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
    background: ${props => props.theme['primary-blue']};
    color: ${props => props.theme['white']};
  }

  &.button--color--option{
    background: ${props => props.theme['white']};
    color: ${props => props.theme['black']};
    border: 1px solid ${props => props.theme['black']};
  }

  &.button--color--transparent{
    background: transparent;
    color: ${props => props.theme['primary-blue']};
    border: 2px solid ${props => props.theme['primary-blue']};
  }
`