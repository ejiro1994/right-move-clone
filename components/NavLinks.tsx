'use client'

import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Underline from './Underline'
import MenuItem from './MenuItem'

type NavLinksProps = {
  children?: React.ReactNode
  navItems: {
    label: string
    subLinks: string[]
  }[]
}

const NavLinks: React.FC<NavLinksProps> = ({ children, navItems }) => {
  const pathname = usePathname()
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  return (
    <div className=' lg:flex hidden'>
      {navItems.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </div>
  )
}

export default NavLinks
