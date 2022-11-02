import React from "react";
import { ThemeProvider } from "styled-components";
import dark from '../src/styles/themes/dark'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={dark}>
      <Story />
    </ThemeProvider>
  )
];