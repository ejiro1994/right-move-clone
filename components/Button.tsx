'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType
  strokeWidth?: number
  iconSize?: number
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      icon: Icon,
      disabled,
      type = 'button',
      iconSize = 17,
      strokeWidth = 3,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        className={twMerge(
          'py-2 px-3 rounded-lg ring-[#00DEB6] flex tracking-wide items-center ring-2 gap-x-2 text-base font-medium hover:bg-[#00DEB6]',
          className
        )}
        ref={ref}
        {...props}
      >
        {Icon && (
          <Icon style={{ strokeWidth: `${strokeWidth}px` }} size={iconSize} />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
