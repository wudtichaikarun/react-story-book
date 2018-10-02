import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSizes } from '../DefaultTheme/styled'

//Header
//Subtitle
//Body
//Caption
//Button

const StyledNormalText = styled.p`
  color: ${colors.black};
  margin: 0;
  padding: 0;
`

const StyledHeaderText = styled.h1`
  color: ${colors.black};
  margin: 0;
  padding: 0;
`

export const Header = styled(StyledHeaderText)`
  font-family: ${fonts.display};
  font-size: ${fontSizes.xxl} !important;
  letter-spacing: normal;
  font-weight: 600;
`
Header.displayName = 'Header'

export const LargeHeader = styled(Header)`
  font-size: ${fontSizes.xxxl} !important;
`
LargeHeader.displayName = 'LargeHeader'

export const SubHeader = styled(Header)`
  font-size: ${fontSizes.xxl} !important;
  font-weight: normal;
`
SubHeader.displayName = 'SubHeader'

export const Subtitle = styled(StyledNormalText)`
  font-family: ${fonts.display};
  font-size: ${fontSizes.xl};
  font-weight: normal;
  letter-spacing: normal;
`
SubHeader.displayName = 'Subtitle'

export const Body = styled(StyledNormalText)`
  font-family: ${fonts.display};
  font-size: ${fontSizes.md};
  letter-spacing: normal;
  font-weight: 500;
`
SubHeader.displayName = 'Body'

export const Caption = styled(StyledNormalText)`
  font-family: ${fonts.body};
  font-size: ${fontSizes.xs};
  letter-spacing: normal;
  font-weight: 300;
`
SubHeader.displayName = 'Caption'

export const Overline = styled(StyledNormalText)`
  font-family: ${fonts.body};
  font-size: ${fontSizes.xxxs};
  letter-spacing: normal;
  font-weight: 300;
`

export const Button = styled(StyledNormalText)`
  font-family: ${fonts.body};
  font-size: ${fontSizes.md};
  letter-spacing: normal;
  font-weight: 500;
`
SubHeader.displayName = 'Button'

type Props = {
  children?: string | React.Node,
}

export const TextComponent = (props: Props) => {
  const { children } = props
  return <StyledNormalText {...props}>{children}</StyledNormalText>
}

export default {
  Header,
  LargeHeader,
  SubHeader,
  Subtitle,
  Body,
  Caption,
  Overline,
  Button,
}
