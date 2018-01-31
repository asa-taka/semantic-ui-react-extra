import React from 'react'
import classNames from 'classnames'

// with castumizable `className` prop
export const withClass = (...classes) => {
  return Component => {
    return ({ className, ...props }) => {
      const c = classNames('uix', ...classes, className)
      return <Component className={c} {...props} />
    }
  }
}
