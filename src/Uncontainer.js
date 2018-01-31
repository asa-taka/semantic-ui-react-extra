import React from 'react'
import { withClass } from './utils'
import './Uncontainer.css'

export default withClass('uncontainer')(props => {
  const { className, style, children } = props
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
})