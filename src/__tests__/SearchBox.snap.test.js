import React from 'react'
import renderer from 'react-test-renderer'
import SearchBox from '../components/SearchBox'

it('SearchBox renders correctly when collpased', () => {
  const tree = renderer.create(<SearchBox collapsed={true}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('SearchBox renders correctly when expanded', () => {
    const tree = renderer.create(<SearchBox collapsed={false}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
