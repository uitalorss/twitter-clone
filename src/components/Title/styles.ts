import styled from "styled-components";

export const MainTitle = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  &.title--color--txt-primary{
    color: ${props => props.theme.colors.text}
  }

  &.title--color--txt-option{
    color: ${props => props.theme.colors.textOption}
  }

  &.title--size--sm{
    font-size: .875rem;
  }

  &.title--size--normal{
    font-size: 1.25rem;
  }
`