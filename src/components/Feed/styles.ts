import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  border-left: 1px solid ${props => props.theme.colors.textOption};
  border-right: 1px solid ${props => props.theme.colors.textOption}; 
`

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`