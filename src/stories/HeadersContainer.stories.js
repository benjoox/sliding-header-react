import React from 'react'
import HeadersContainer from '../components/HeadersContainer'

export default {
  title: 'Headers Container',
  component: HeadersContainer,
}

const Template = (args) => <HeadersContainer {...args} />

export const Collapsed = Template.bind({})
Collapsed.args = {
  collapsed: true,
}

export const Expanded = Template.bind({})
Expanded.args = {
  collapsed: false,
}
