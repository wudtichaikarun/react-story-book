import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

import 'antd/dist/antd.css'
import '../src/index.css'

setOptions({
  name: 'SENDIT STORYBOOK',
  sidebarAnimations: false,
  addonPanelInRight: true,
})
// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
