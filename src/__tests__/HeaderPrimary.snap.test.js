import React from 'react'
import renderer from 'react-test-renderer'
import HeaderPrimary from '../components/HeaderPrimary'

it('HeaderPrimary  renders correctly', () => {
  const tree = renderer.create(<HeaderPrimary />).toJSON()
  expect(tree).toMatchSnapshot()
})
