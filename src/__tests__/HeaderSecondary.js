import React from 'react'
import renderer from 'react-test-renderer'
import HeaderSecondary from '../components/HeaderSecondary'

it('Large screen - HeaderSecondary renders correctly when collpased', () => {
  const tree = renderer
    .create(<HeaderSecondary collapsed={true} width={1080} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Large screen - HeaderSecondary renders correctly when expanded', () => {
  const tree = renderer
    .create(<HeaderSecondary collapsed={false} width={1080} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Small screen - HeaderSecondary renders correctly when collpased', () => {
  const tree = renderer
    .create(<HeaderSecondary collapsed={true} width={575} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Small screen - HeaderSecondary renders correctly when expanded', () => {
  const tree = renderer
    .create(<HeaderSecondary collapsed={false} width={575} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
