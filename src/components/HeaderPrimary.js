import React, { useRef, useEffect, useState } from 'react'
import { bool, func } from 'prop-types'
import { useResize } from './CustomHooks'
import { ReactComponent as ForumDots } from './assets/forum-dots.svg'
import { ReactComponent as ForumLogoText } from './assets/forum-logo-text.svg'
import RegisterButton from './RegisterButton'
import SearchBox from './SearchBox'

export default function HeaderPrimary({ collapsed, setWidth }) {
  const el = useRef(null)
  const [innerWidth, setInnerWidth] = useState(1)

  useResize((e) => {
    setInnerWidth(window.innerWidth)
  })

  useEffect(() => {
    if (el.current) {
      // Remove the width of the DropDownItem component
      setWidth(el.current.offsetWidth - 55)
    }
  }, [el, innerWidth, setWidth])

  return (
    <div className="primary" ref={el}>
      <section>
        <div className="vertical-align">
          <ForumDots />
        </div>
        <div
          className={`vertical-align text-logo ${collapsed ? 'collapsed' : ''}`}
        >
          <ForumLogoText />
        </div>
      </section>

      <section>
        <SearchBox collapsed={collapsed} />
        <RegisterButton />
      </section>
    </div>
  )
}

HeaderPrimary.protoType = {
  collapse: bool.isRequired,
  setWidth: func.isRequired
}
