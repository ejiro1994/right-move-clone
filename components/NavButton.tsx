'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ActivePill from './ActivePill'

type NavButtonProps = {
  item?: {
    label: string
    subLinks: string[]
  }
  navConfig: {
    label: string
    subLinks: string[]
  }
}

const NavButton: React.FC<NavButtonProps> = ({ navConfig }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div
      className='pointer decoration-2 relative px-3 py-2 font-semibold rounded-md cursor-pointer'
      onHoverStart={() => {
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
      }}
      key={navConfig.label}
    >
      <span className='relative'>
        <span className='relative z-[999]'>{navConfig.label}</span>
        {isHovered && <ActivePill />}
      </span>
    </motion.div>
  )
}

export default NavButton
