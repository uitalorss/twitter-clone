import styled from "styled-components";

export const Container = styled.div`

`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  .logo{
    margin: 1.5rem 1rem;
    width: 30px;
  }
`

export const ButtonNavItem = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 100px;
  &:hover{
    background: ${props => props.theme['dark3']};
    transition: .3s
  }
  &:last-child{
    margin-bottom: 2rem;
  }
`

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  margin: 1rem 0;
  display: flex;
  gap: 0 2rem;
  justify-content: space-around;
  div{
    display: flex;
    flex-direction: column;
  }
`