import React from 'react'
import './ButtonToolbar.css'
import { withClass } from './utils'

const ButtonToolbar = withClass('button-toolbar')(props => {
  const { children, className, ...childProps } = props
  return (
    <div className={className}>
      <div className="button-toolbar-container">
        {React.Children.map(children, e => React.cloneElement(e, childProps))}
      </div>
    </div>
  )
})

export default ButtonToolbar