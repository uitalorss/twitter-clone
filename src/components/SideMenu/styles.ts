import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
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
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem 1.5rem;
  border: none;
  outline: none;
  border-radius: 100px;
  @media (max-with: 1600px){
    padding: .5rem;
  }
  &:hover{
    background: ${props => props.theme.colors.secondary};
    transition: .3s
  }
  &:active{
    color: ${props => props.theme.colors.accent};
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