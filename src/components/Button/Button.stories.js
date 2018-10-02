import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import Button from './index'
const stories = storiesOf('Button', module)

// StyleButton.displayName = 'Button'

stories
  .addDecorator((story, context) => {
    // console.log('what is story--->', story)
    // console.log('what is context--->', context)

    return withInfo('common info')(story)(context)
  })
  .add('with text', () => (
    <Button onClick={action('clicked')}>Test Click...</Button>
  ))
