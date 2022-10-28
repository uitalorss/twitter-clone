import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import {Canvas} from './components/Canvas'
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Canvas />
      <GlobalStyle />
    </ThemeProvider>
  )
}


