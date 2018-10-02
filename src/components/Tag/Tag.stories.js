import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { styledSystem } from '../../utils/storybook'
import { colors, space } from '../DefaultTheme/styled'
import Text, { Caption, Subtitle } from '../Text/index'

import Tag from './index'

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
  margin-bottom: ${space.md};
`

const stories = storiesOf('Tag', module)
styledSystem(stories)
stories
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .add('Tag', () => {
    const txt = text('Text', 'ADD TEXT PLEASE !')
    const color = text('Color', colors.black)
    const closable = boolean('Closable', true)
    return (
      <div>
        <TypeContainer>
          <StyledSubTitle>Customize Tag</StyledSubTitle>
          <GroupContainer>
            <StyledCaption>Open knobs tab to customize.</StyledCaption>
            <Tag color={colors.secondaryDark} closable={closable}>
              {txt}
            </Tag>
            <Tag color={colors.secondary} closable={closable}>
              {txt}
            </Tag>
          </GroupContainer>
        </TypeContainer>
      </div>
    )
  })
