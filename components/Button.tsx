'use client'
import { IconType } from 'react-icons'

interface ButtonProps {
  children: React.ReactNode
  className: string
  icon?: IconType
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  icon: Icon,
  setIsNavOpen,
}) => {
  return (
    <button
      className={className}
      onMouseEnter={() => {
        setIsNavOpen(false)
      }}
    >
      {Icon && <Icon style={{ strokeWidth: '3px' }} size={17} />}
      <p>{children}</p>
    </button>
  )
}

export default Button
