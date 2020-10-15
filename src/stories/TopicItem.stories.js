import React from 'react'
import TopicItem from '../components/TopicItem'

export default {
  title: 'Topic Item',
  component: TopicItem,
}

const Template = (args) => <TopicItem {...args} />

export const Collapsed = Template.bind({})
Collapsed.args = {
    topic: 'Debate X',
    index: 1,
    setElementWidth: () => {},
    className: 'collapsed',
}

export const Expanded = Template.bind({})
Expanded.args = {
    topic: 'Debate X',
    index: 1,   
    setElementWidth: () => {},
}
