import styled from "styled-components";


export const ButtonContent = styled.button`
  background: ${props => props.theme['primary-blue']};
  color: ${props => props.theme['white']};
  font-size: 1.1875rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  padding: 1rem 0;
  border: none;
  outline: none;
  width: 66%;
  border-radius: 100px;
`