import React from 'react'

import HeaderPrimary from '../components/HeaderPrimary'

export default {
  title: 'Header Primary',
  component: HeaderPrimary,
}

const Template = (args) => <HeaderPrimary {...args} />

export const Collapsed = Template.bind({})
Collapsed.args = {
  collapsed: true,
  setWidth: () => {}
}

export const Expanded = Template.bind({})
Expanded.args = {
  collapsed: false,
  setWidth: () => {}
}
