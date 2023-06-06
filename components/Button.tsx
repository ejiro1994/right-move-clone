'use client'
import { IconType } from 'react-icons'

type ButtonProps = {
  children: React.ReactNode
  className: string
  icon: IconType
}

const Button: React.FC<ButtonProps> = ({ children, className, icon: Icon }) => {
  return (
    <div className={className}>
      <Icon style={{ strokeWidth: '3px' }} size={17} />
      <p>{children}</p>
    </div>
  )
}

export default Button
