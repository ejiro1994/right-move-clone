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
    <div className='w-full mx-10'>
      <ul className='lg:flex hidden  justify-end gap-5'>
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
    </div>
  )
}

export default NavButtons
