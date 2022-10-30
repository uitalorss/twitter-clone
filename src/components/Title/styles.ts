import styled from "styled-components";

export const MainTitle = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  &.title--color--white{
    color: ${props => props.theme['white']}
  }

  &.title--color--black{
    color: ${props => props.theme['black']}
  }

  &.title--size--sm{
    font-size: .875rem;
  }

  &.title--size--normal{
    font-size: 1.25rem;
  }
`