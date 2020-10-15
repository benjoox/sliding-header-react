import React, { useRef } from 'react'
import { bool } from 'prop-types'
import { ReactComponent as ForumDots } from './assets/forum-dots.svg'
import { ReactComponent as ForumLogoText } from './assets/forum-logo-text.svg'
import RegisterButton from './RegisterButton'
import SearchBox from './SearchBox'

export default function HeaderPrimary({ collapsed }) {
  const el = useRef(null)

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
}
