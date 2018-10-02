// @flow
import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import { colors, space } from '../DefaultTheme/styled'

// type Props = {
//   text: string,
// }

const StyleButton = styled(Button)`
  color: white;
  background-color: ${colors.secondary};
  padding: ${space.md}
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.secondaryDark};
  }

`
const ButtonModif = ({ children }) => <StyleButton>{children}</StyleButton>

export default ButtonModif
