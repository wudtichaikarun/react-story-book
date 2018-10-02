// @flow

import React from 'react'
import styled from 'styled-components'
import { colors, space } from '../DefaultTheme/styled'
import Text, { Caption } from '../Text/index'

const StyledCaption = styled(Caption)`
  color: ${colors.grey50};
  font-style: italic;
`

const HeaderContainer = styled.div`
  margin-bottom: ${space.sm};
`

const LinkContainer = styled.div`
  margin-bottom: ${space.lg};
`

const StyledLink = styled.a`
  font-style: italic;
`

type Props = {
  header: string,
  url: string,
  caption: string,
  linkName: string,
}

const StoryHeader = (props: Props) => {
  const { header, url, caption, linkName, children } = props
  return (
    <div>
      <HeaderContainer>
        <Text.LargeHeader>{header}</Text.LargeHeader>
        <StyledCaption>{caption}</StyledCaption>
      </HeaderContainer>
      {linkName ? (
        <LinkContainer>
          <StyledLink href={url} target="_blank">
            {linkName}
          </StyledLink>
        </LinkContainer>
      ) : null}
      {children}
    </div>
  )
}

export default StoryHeader
