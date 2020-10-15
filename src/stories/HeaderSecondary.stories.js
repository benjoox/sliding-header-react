import React from 'react'

import HeaderSecondary from '../components/HeaderSecondary'

export default {
  title: 'Header Secondary',
  component: HeaderSecondary,
}

const Template = (args) => <HeaderSecondary {...args} />

export const Collapsed = Template.bind({})
Collapsed.args = {
  width: 1080,
  collapsed: true,
}

export const Expanded = Template.bind({})
Expanded.args = {
  width: 1080,
  collapsed: false,
}


export const CollapsedSmallScreen = Template.bind({})
CollapsedSmallScreen.args = {
  width: 575,
  collapsed: true,
}

export const ExpandedSmallScreen = Template.bind({})
ExpandedSmallScreen.args = {
  width: 575,
  collapsed: false,
}
