import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs, object } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { styledSystem } from '../../utils/storybook'
import { colors, space } from '../DefaultTheme/styled'
import Text, { Caption, Subtitle } from '../Text/index'

import Card from './index'
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
  margin-bottom: ${space.lg};
`

const stories = storiesOf('Card', module)
styledSystem(stories)
stories
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .add('Card', () => {
    const defaultValue = { width: '500px' }
    const txt = text('Text', 'ADD TEXT PLEASE !')
    const title = text('Title', '')
    const style = object('Styles', defaultValue)
    const noPadding = boolean('No Padding', false)
    return (
      <div>
        <StoryHeader
          header="Card"
          url="https://ant.design/components/card/"
          caption="Simple rectangular container. ( Use component from Ant Design.)"
          linkName="Antd-card"
        />
        <TypeContainer>
          <StyledSubTitle>Customize Card</StyledSubTitle>
          <GroupContainer>
            <StyledCaption>Open knobs tab to customize.</StyledCaption>
            <Card noPadding={noPadding} style={style} title={title}>
              {txt}
            </Card>
          </GroupContainer>
        </TypeContainer>
        <TypeContainer>
          <StyledSubTitle>Basic</StyledSubTitle>
          <GroupContainer>
            <StyledCaption>Default</StyledCaption>
            <Card>This is a default card.</Card>
          </GroupContainer>
          <GroupContainer>
            <StyledCaption>With title</StyledCaption>
            <Card title="This is a title.">This is a no padding card.</Card>
          </GroupContainer>
          <GroupContainer>
            <StyledCaption>No Padding</StyledCaption>
            <Card title="This is a title." noPadding>
              This is a no padding card.
            </Card>
          </GroupContainer>
          <GroupContainer>
            <StyledCaption>Customize width and height</StyledCaption>
            <Card style={{ width: '300px', height: '100px' }}>
              This is a customize width and height card.
            </Card>
          </GroupContainer>
          <GroupContainer>
            <StyledCaption>With Cover</StyledCaption>
            <Card
              cover={
                <img
                  alt="bnk-48"
                  src="http://fg.lnwfile.com/_/fg/_raw/br/t6/bv.jpg"
                />
              }
            >
              This is a bnk48.
            </Card>
          </GroupContainer>
        </TypeContainer>
      </div>
    )
  })
