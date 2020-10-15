import React from 'react'
import { bool } from 'prop-types'
import { ReactComponent as Search } from './assets/search.svg'

export default function SearchBox({ collapsed }) {
    console.log('collapsed ', collapsed)
  return (
    <div className="search-box-container">
      <div className={`search-box ${collapsed ? 'collapsed' : ''}`}>
        <div className={`search-icon ${collapsed ? 'collapsed' : ''}`}>
          <Search />
        </div>
        <input type="text" className="search-box-input" placeholder="Search" />
      </div>
    </div>
  )
}

SearchBox.protoType = {
  collap: bool.isRequired,
}
