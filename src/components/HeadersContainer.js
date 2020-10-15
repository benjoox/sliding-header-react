import React, { useState } from 'react'
import { useScroll } from './CustomHooks'
import HeaderPrimary from './HeaderPrimary'
import HeaderSecondary from './HeaderSecondary'
import '../index.css'

export default function HeadersContainer() {
  const [collapsed, setCollapsed] = useState(false)
  
  const [width, setWidth] = useState(0)
  useScroll((e) => {
    setCollapsed(window.scrollY > 50)
  })
 
  return (
    <div className={`container ${collapsed ? 'collapsed' : ''}`}>
      <header className={collapsed ? 'collapsed' : ''}>
        <HeaderPrimary width={width} collapsed={collapsed} setWidth={setWidth} />
        <HeaderSecondary width={width} collapsed={collapsed} />
      </header>
    </div>
  )
}
