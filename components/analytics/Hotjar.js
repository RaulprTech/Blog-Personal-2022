import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

export default function Hotjar() {
  useEffect(() => {
    hotjar.initialize(1928200, 6)
  }, [])
  return <div></div>
}
