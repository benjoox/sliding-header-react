import React from 'react'

import SearchBox from '../components/SearchBox'

export default {
  title: 'Search Box',
  component: SearchBox,
}

const Template = (args) => <SearchBox {...args} />

export const Collapsed = Template.bind({})
Collapsed.args = {
    collapsed: true
}

export const Expanded = Template.bind({})
Expanded.args = {
    collapsed: false
}
