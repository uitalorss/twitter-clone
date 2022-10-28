import styled from "styled-components";

export const MenuItem = styled.li`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem 1rem;
  cursor: pointer;
  width: 60%;
  span{
    font-size: 1.1875rem;
    font-weight: 500;
    color: ${props => props.theme['white']}
  }
  &:active{
    span{
      font-weight: 700;
    }
  }
  &:hover{
    background: ${props => props.theme['dark2']};
    border-radius: 40px;
    transition: .2s;
  }
`