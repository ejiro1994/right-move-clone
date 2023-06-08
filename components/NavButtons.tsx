'use client'

import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import NavButton from './NavButton'

type NavButtonsProps = {
  children?: React.ReactNode
  navConfig: {
    label: string
    subLinks: string[]
  }[]
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  isNavOpen: boolean
}

const NavButtons: React.FC<NavButtonsProps> = ({
  children,
  navConfig,
  setIsNavOpen: setIsHovered,
  isNavOpen: isNavHovered,
}) => {
  const [activeTab, setActiveTab] = useState(navConfig[0].label)
  return (
    <div
      className=' lg:flex hidden'
      onMouseEnter={() => {
        setIsHovered(true)
      }}
    >
      {navConfig.map((item) => (
        <NavButton key={item.label} navConfig={item} activeTab={activeTab} setActiveTab={setActiveTab} isNavHovered={isNavHovered}/>
      ))}
    </div>
  )
}

export default NavButtons
