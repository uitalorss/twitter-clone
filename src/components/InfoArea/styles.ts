import styled from "styled-components";

export const InfoAreaDiv = styled.div`
  background: ${props => props.theme.colors.secondary};
  border-radius: 25px;
  padding-top: 1rem;
  span{
    padding: .625rem 1rem;
  }
`

export const InfoAreaItem = styled.div`
  padding: .625rem 1rem;
  border-top: 1px solid ${props => props.theme.colors.textOption};
  display: flex;
  gap: 0 1rem;
  div{
    display: flex;
    flex-direction: column;
    span{
    font-size: 12px;
    padding: .25rem;
  }
  a{
    font-size: .875rem;
    line-height: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
  }
`

export const Image = styled.div`
  img{
    border-radius: 10px;
  }
`