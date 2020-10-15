import React from 'react'
import renderer from 'react-test-renderer'
import TopicItem from '../components/TopicItem'

it('TopicItem  renders correctly', () => {
  const props = {
    topic: 'Debate X',
    index: 1,
    setElementWidth: () => {},
    className: 'collapsed',
  }
  const tree = renderer.create(<TopicItem {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
