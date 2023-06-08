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
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>
}

const NavButtons: React.FC<NavButtonsProps> = ({
  children,
  navConfig,
  setIsHovered,
}) => {
  return (
    <div
      className=' lg:flex hidden'
      onMouseEnter={() => {
        setIsHovered(true)
      }}
    >
      {navConfig.map((item) => (
        <NavButton key={item.label} navConfig={item} />
      ))}
    </div>
  )
}

export default NavButtons
