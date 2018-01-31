import React from 'react'
import './ButtonToolbar.css'
import classNames from 'classnames'

// with castumizable `className` prop
const withClass = (...classes) => {
  return Component => {
    return ({ className, ...props }) => {
      const c = classNames(...classes, className)
      return <Component className={c} {...props} />
    }
  }
}

const ButtonToolbar = withClass('uix', 'button-toolbar')(props => {
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