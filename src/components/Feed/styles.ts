import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border-left: 1px solid ${props => props.theme['dark4']};
  border-right: 1px solid ${props => props.theme['dark4']}; 

`

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme['dark4']}; 
`