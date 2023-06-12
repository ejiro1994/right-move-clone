import { usePathname } from 'next/navigation'
import { useDebugValue, useMemo, useState } from 'react'
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
  setIsNavOpen,
  isNavOpen,
}) => {
  const [activeTab, setActiveTab] = useState(navConfig[0].label)
  const [hoveredButtonCoordinates, setHoveredButtonCoordinates] =
    useState<DOMRect | null>(null)

  const links =
    navConfig.find((menuItem) => menuItem.label === activeTab)?.subLinks || []

  const handleButtonHover = (coordinates: DOMRect) => {
    setHoveredButtonCoordinates(coordinates)
  }

  return (
    <ul className='lg:flex hidden'>
      {navConfig.map((item) => (
        <NavButton
          key={item.label}
          navConfig={navConfig}
          buttonConfig={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          onHover={handleButtonHover}
        />
      ))}
    </ul>
  )
}

export default NavButtons
