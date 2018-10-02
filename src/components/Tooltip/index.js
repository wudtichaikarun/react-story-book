import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'antd'

import { colors } from '../DefaultTheme/styled'

const StyledTooltip = styled(Tooltip)``

type Props = {
  placement?:
    | 'topLeft'
    | 'top'
    | 'topRight'
    | 'leftTop'
    | 'left'
    | 'leftBottom'
    | 'rightTop'
    | 'right'
    | 'rightBottom'
    | 'bottomLeft'
    | 'bottom'
    | 'bottomRight',
  tooltipText?: string,
}

const SenditTooltip = (props: Props) => {
  const { placement, tooltipText, children, ...rest } = props
  return (
    <StyledTooltip placement={placement} title={tooltipText} {...rest}>
      {children}
    </StyledTooltip>
  )
}

SenditTooltip.defaultProps = {
  placement: 'top',
  tooltipText: 'Tooltip',
}

export default SenditTooltip
