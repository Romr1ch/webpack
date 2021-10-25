import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.color.default};
  }
`

const AppTitle = styled.h1<{ size: number }>`
  font-size: ${({ size }) => size}px;
`

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppTitle size={48}>App!</AppTitle>
      <GlobalStyle />
    </ThemeProvider>
  )
}
