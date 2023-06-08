'use client'
import { IconType } from 'react-icons'

interface ButtonProps {
  children: React.ReactNode
  className: string
  icon?: IconType
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  icon: Icon,
  setIsHovered,
}) => {
  return (
    <div
      className={className}
      onMouseEnter={() => {
        setIsHovered(false)
      }}
    >
      {Icon && <Icon style={{ strokeWidth: '3px' }} size={17} />}
      <p>{children}</p>
    </div>
  )
}

export default Button
