import React, { Component } from 'react'
import styled from 'styled-components'
import { Tag } from 'antd'

import { colors, fonts } from '../DefaultTheme/styled'

type Props = {
  color: string,
  closable: boolean,
}

const StyledTag = styled(Tag)`
  border-radius: 50px;
  box-shadow: 0 1px 2px 0 rgba(0, 76, 255, 0.4);
  font-family: ${fonts.display};
  font-size: 0.8rem;
  height: 30px;
  line-height: 30px;
  padding: 0 12px;
  color: ${colors.white};
`

export const TagComponent = (props: Props) => {
  const { color, closable, children, ...rest } = props
  return (
    <StyledTag color={color} closable={closable} {...rest}>
      {children}
    </StyledTag>
  )
}

TagComponent.defaultProps = {
  color: colors.primary,
  closable: true,
}

export default TagComponent
