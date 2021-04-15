import React from 'react'

interface ButtonProps {
  className: string
  type: 'primary' | 'success' | 'warn' | 'error'
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, type, ...rest } = props
  function getBgColor(type: string): string {
    switch (type) {
      case 'primary':
        return 'blue'
      case 'success':
        return 'green'
      case 'warn':
        return 'orange'
      case 'error':
        return 'red'
      default:
        return 'gray'
    }
  }
  return (
    <button style={{ background: getBgColor(type) }} className={className} {...rest}>
      {children}
    </button>
  )
}
