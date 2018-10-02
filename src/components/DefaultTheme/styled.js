import Color from 'color'

export const primaryColor = Color.hsl('#004eff')
const blackColor = Color.hsl('#000000')

export const fonts = {
  display: `'SF Pro Display', "Noto Sans Thai UI", 'system-ui', 'Thonburi', 'Tahoma', 'sans-serif'`,
  body: `'SF Pro Text', system-ui, Thonburi, Tahoma, sans-serif`,
}

// rem unit
export const space = {
  xs: '0.375rem', //6 px
  sm: '0.75rem', //12 px
  md: '1.125rem', //18 px
  lg: '1.5rem', //24 px
  xl: '3rem', //48 px
}

export const fontSizes = {
  base: '16px',
  xxxs: '0.625rem', //10 px
  xxs: '0.75rem', // 12 px
  xs: '0.8125rem', //13 px
  sm: '0.875rem', //14 px
  md: '1rem', //16 px
  lg: '1.125rem', //18 px
  xl: '1.25rem', //20 px
  xxl: '1.5rem', // 24 px
  xxxl: '2.25rem', // 36 px
}

export const colors = {
  primary: primaryColor.string(),
  primaryDark: primaryColor.darken(0.1).string(),
  primaryDarker: primaryColor.darken(0.2).string(),
  primaryDarken: primaryColor.darken(0.3).string(),
  primaryDarkest: primaryColor.darken(0.5).string(),
  secondary: '#3788B6',
  secondaryDark: '#2D78B9',
  ternary: '#ACC4D6',
  ternaryDarck: '#5186B0',
  black: blackColor.string(),
  grey80: blackColor.fade(0.2).string(),
  grey50: blackColor.fade(0.5).string(),
  grey20: blackColor.fade(0.8).string(),
  grey10: blackColor.fade(0.9).string(),
  grey5: blackColor.fade(0.95).string(),
  white: '#ffffff',
  success: '#00bfbf',
  pending: '#f27900',
  inProgress: '#f2ae24',
  initial: '#808080',
  error: '#ff0d5e',
}

const theme = {
  fonts,
  fontSizes,
  space,
  colors,
}

export default theme
