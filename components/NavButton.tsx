'use client'
import { motion, AnimatePresence } from 'framer-motion'
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
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  isNavHovered: boolean
}

const NavButton: React.FC<NavButtonProps> = ({
  navConfig,
  activeTab,
  setActiveTab,
  isNavHovered,
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => {
        setIsActive(true)
        setActiveTab(navConfig.label)
      }}
      className=' decoration-2 relative px-3 py-2 font-semibold rounded-md cursor-pointer'
      onHoverStart={() => {
        setIsActive(true)
      }}
      key={navConfig.label}
    >
      <span className='relative'>
        <span className='relative z-[999]'>{navConfig.label}</span>
        {isNavHovered && (
          <AnimatePresence>
            {activeTab === navConfig.label && <ActivePill />}
          </AnimatePresence>
        )}
      </span>
    </motion.div>
  )
}

export default NavButton
