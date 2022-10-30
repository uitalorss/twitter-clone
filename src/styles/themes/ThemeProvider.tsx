import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { defaultTheme } from "./default"

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({children} : ThemeProviderProps){
  return (
    <StyledThemeProvider theme={defaultTheme}>
      {children}
    </StyledThemeProvider>
  )
}