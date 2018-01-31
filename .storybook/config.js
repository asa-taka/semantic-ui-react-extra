import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/ButtonToolbar.js')
  require('../stories/Uncontainer.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
