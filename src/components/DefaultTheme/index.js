import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './styled'

const ThemeContainer = styled.div`
  padding: 1em;
`

const DefaultTheme = props => (
  <ThemeProvider theme={theme}>
    <ThemeContainer>{props.children}</ThemeContainer>
  </ThemeProvider>
)

export default DefaultTheme
