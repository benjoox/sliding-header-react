import React from 'react'
import renderer from 'react-test-renderer'
import HeadersContainer from '../components/HeadersContainer'

it('HeadersContainer  renders correctly', () => {
  const tree = renderer.create(<HeadersContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
