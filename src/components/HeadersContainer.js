import React, { useState, useRef, useEffect } from 'react'
import { useScroll, useResize } from './CustomHooks'
import HeaderPrimary from './HeaderPrimary'
import HeaderSecondary from './HeaderSecondary'
import '../index.css'

export default function HeadersContainer() {
  const el = useRef(null)
  const [collapsed, setCollapsed] = useState(false)
  const [innerWidth, setInnerWidth] = useState(1)
  const [width, setWidth] = useState(0)
  useScroll((e) => {
    if (window.scrollY > 50) setCollapsed(window.scrollY > 50)
  })
  useResize((e) => {
    setInnerWidth(window.innerWidth)
  })

  useEffect(() => {
    if (el.current) {
      setWidth(el.current.offsetWidth)
    }
  }, [el, innerWidth])
  return (
    <div className={`container ${collapsed ? 'collapsed' : ''}`}>
      <header className={collapsed ? 'collapsed' : ''}>
        <HeaderPrimary width={width} collapsed={collapsed} />
        <HeaderSecondary width={width} collapsed={collapsed} />
      </header>
    </div>
  )
}
