import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root{
  background: ${props => props.theme.colors.primary};

  max-height: 100vh;
  max-width: 100vw;

  width: 100%;
  height: 100%;
}

p, button, span, a{
  font-family: 'Poppins', sans-serif;
}
`