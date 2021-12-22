import React, { FC } from 'react'

interface IButtonProps {
  children: any
  version?: string
  type?: any
  isDisabled?: boolean
}

const Button: FC<IButtonProps> = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
}

export default Button
