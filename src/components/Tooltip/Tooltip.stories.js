import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { styledSystem } from '../../utils/storybook'
import { colors, space } from '../DefaultTheme/styled'
import Text, { Caption, Subtitle } from '../Text/index'

import Tooltip from './index'
import Button from '../Button/index'
import StoryHeader from '../StoryHeader'

const StyledSubTitle = styled(Subtitle)`
  margin-bottom: ${space.lg};
`

const StyledCaption = styled(Caption)`
  color: ${colors.grey50};
  margin-bottom: ${space.sm};
`

const TypeContainer = styled.div`
  margin-bottom: ${space.xl};
`

const GroupContainer = styled.div`
  margin-bottom: ${space.xl};
`

const StyledTooltip = styled(Tooltip)`
  color: ${colors.primary};
  display: inline-block;
  margin-right: ${space.lg};
  margin-bottom: ${space.lg};
`

const TooltipContainer = styled.div`
  display: inline-block;
  margin-right: ${space.lg};
`

const stories = storiesOf('Tooltip', module)
styledSystem(stories)
stories
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .add('Tooltip', () => {
    const txt = text('Text', 'Add your text here')
    const tooltipText = text('Tooltip Text', 'Tooltip')
    const options = {
      topLeft: 'topLeft',
      top: 'top',
      topRight: 'topRight',
      leftTop: 'leftTop',
      left: 'left',
      leftBottom: 'leftBottom',
      rightTop: 'rightTop',
      right: 'right',
      rightBottom: 'rightBottom',
      bottomLeft: 'bottomLeft',
      bottom: 'bottom',
      bottomRight: 'bottomRight',
    }
    const defaultValue = 'top'
    const value = select('Placement', options, defaultValue, 'GROUP-ID1')

    return (
      <div>
        <StoryHeader
          header="Tooltip"
          url="https://ant.design/components/tooltip/"
          caption="A simple text popup tip."
          linkName="Antd-tooltip"
        />
        <TypeContainer>
          <StyledSubTitle>Customize Tooltip</StyledSubTitle>
          <GroupContainer>
            <StyledCaption>Open knobs tab to customize.</StyledCaption>
            <Tooltip placement={value} tooltipText={tooltipText}>
              <span>{txt}</span>
            </Tooltip>
          </GroupContainer>
        </TypeContainer>
      </div>
    )
  })
