import { useEffect } from 'react'

export const useScroll = (callBack) => {
  useEffect(() => {
    window.addEventListener('scroll', callBack)
    return () => window.removeEventListener('scroll', callBack)
  })
}

export const useResize = (callBack) => {
  useEffect(() => {
    window.addEventListener('resize', callBack)
    return () => window.removeEventListener('resize', callBack)
  })
}
