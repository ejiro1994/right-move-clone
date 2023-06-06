'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type NavLinksProps = {
  children?: React.ReactNode
  navItems: {
    label: string
    subLinks: string[]

  }[]
  mouseOver: React.Dispatch<React.SetStateAction<boolean>>

}

const NavLinks: React.FC<NavLinksProps> = ({ children, navItems, mouseOver }) => {
  const pathname = usePathname()

  return (
    <div className='gap-x-2 lg:flex hidden'>
      {navItems.map((item) => (
        <div
        onMouseEnter={() => {
          mouseOver(true)
        }}

          className='cursor-pointer decoration-2 hover:underline hover:underline-offset-4 font-semibold py-2 px-3 hover:bg-slate-100 rounded-md'
          key={item.label}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default NavLinks
