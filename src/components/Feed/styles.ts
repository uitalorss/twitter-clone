import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border-left: 1px solid ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.secondary}; 
`

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`