import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { colors } from '../DefaultTheme/styled'

const StyledCard = styled(Card)`
  border-radius: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  background-color: ${colors.ternary};
  color: white;
`

// type Props = {
//   title?: string,
//   loading?: boolean,
//   bordered?: boolean,
//   noPadding?: boolean,
// }

const SenditCard = props => {
  const { title, bordered, noPadding, ...rest } = props
  // const paddingStyled = noPadding ? `{padding: '0'}` : null
  return (
    <StyledCard
      title={title}
      headStyle={noPadding ? { padding: '0' } : { padding: '20px 15px 0' }}
      bodyStyle={noPadding ? { padding: '0' } : { padding: '15px' }}
      bordered={bordered}
      {...rest}
    >
      {props.children}
    </StyledCard>
  )
}

SenditCard.defaultProps = {
  bordered: false,
  noPadding: false,
}

export default SenditCard
