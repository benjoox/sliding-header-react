import React from 'react'
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg'

export default function DropdownItem() {
  return (
    <li className='dropdown-item'>
      All A-Z
      <span>
        <ArrowDown />
      </span>
    </li>
  )
}
