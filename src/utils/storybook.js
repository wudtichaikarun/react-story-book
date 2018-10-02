import React from 'react'

import DefaultTheme from '../components/DefaultTheme'

export const styledSystem = storyOf =>
  storyOf.addDecorator(story => <DefaultTheme>{story()}</DefaultTheme>)
