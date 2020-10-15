import React, { useRef, useEffect } from 'react'
import { func, number, string } from 'prop-types'

export default function TopicItem({
  topic,
  index,
  setElementWidth,
  className,
}) {
  const liRef = useRef()
  useEffect(() => {
    const { current } = liRef
    if (current) {
      setElementWidth(index, current.getBoundingClientRect().width)
    }
  }, [liRef, index])
  const classname = className ? `topic-item ${className}` : 'topic-item'
  return (
    <li ref={liRef} className={classname}>
      <a href="#">{topic}</a>
    </li>
  )
}

TopicItem.defaultProps = {
  className: null,
}

TopicItem.protoType = {
  topic: string.isRequired,
  index: number.isRequired,
  setElementWidth: func.isRequired,
  className: string,
}
