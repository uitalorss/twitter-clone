import { ThemeProvider as StyledThemeProvider } from "styled-components"
import dark from "./dark"

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({children} : ThemeProviderProps){
  return (
    <StyledThemeProvider theme={dark}>
      {children}
    </StyledThemeProvider>
  )
}