import React, { useState, useRef, useEffect } from 'react'
import { bool, number } from 'prop-types'
import DropdownItem from './DropdownItem'
import TopicItem from './TopicItem'

const menuList = [
  'Brexit',
  'Climate',
  'Copyright',
  'Migration',
  'Deb on hover',
  'Debate X',
  'Debate Y',
  'Debate L',
  'Debate S',
]
export default function HeaderSecondary({ width, collapsed }) {
  const [widthArray, setWidthArray] = useState([])
  // Number of items in the primary header
  const [primaryItemCount, setPrimaryItemCount] = useState(menuList.length)

  // Number of items in the secondary header
  const [secondaryItemCount, setSecondaryItemCount] = useState(menuList.length)
  const ulRef = useRef()

  useEffect(() => {
    const allowedWidth = width - 290 - 120
    function calculatePrimaryItems() {
      let sumWidth = 0
      for (let k = 0; k < widthArray.length; k++) {
        sumWidth = sumWidth + widthArray[k]
        if (sumWidth > width) {
          setSecondaryItemCount(k)
          break
        }
      }
    }

    function calculateSecondaryItems(allowedWidth) {
      let sumWidth = 0
      for (let k = 0; k < widthArray.length; k++) {
        sumWidth = sumWidth + widthArray[k]
        if (sumWidth > allowedWidth) {
          setPrimaryItemCount(k)
          break
        }
      }
    }
    if (widthArray.length === menuList.length && allowedWidth > 0) {
      calculatePrimaryItems()
      calculateSecondaryItems(allowedWidth)
    }
  }, [width, widthArray, collapsed])

  const topicList = () => {
    const result = []
    for (let k = 0; k < menuList.length; k++) {
      if (k < secondaryItemCount) {
        result.push(
          <TopicItem
            key={k}
            topic={menuList[k]}
            index={k}
            className={k > primaryItemCount && collapsed ? 'fade-out' : ''}
            setElementWidth={(index, width) => {
              widthArray[index] = width
              setWidthArray(widthArray)
            }}
          />
        )
      }
    }
    return result
  }

  return (
    <div className={`secondary ${collapsed ? 'collapsed' : ''}`}>
      <ul ref={ulRef}>
        <DropdownItem />
        {topicList()}
      </ul>
    </div>
  )
}

HeaderSecondary.propTypes = {
  width: number.isRequired,
  collapsed: bool.isRequired,
}
