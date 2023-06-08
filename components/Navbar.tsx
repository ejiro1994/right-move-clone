'use client'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import NavButtons from './NavButtons'
import SubMenuBackdrop from './SubMenuBackdrop'
import { AnimatePresence } from 'framer-motion'

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mouseY, setMouseY] = useState(0)

  const navConfig = useMemo(
    () => [
      {
        label: 'Buy',
        subLinks: [
          'Property for sale',
          'New homes for sale',
          'Where can I live',
          'Property valuation',
          'Investors',
          'Mortgages',
        ],
      },
      {
        label: 'Rent',
        subLinks: ['Property to rent', 'Student property to rent'],
      },
      {
        label: 'House Prices',
        subLinks: [
          'Sold house prices',
          'Property valuation',
          'Price comparison report',
          'Market trends',
        ],
      },
      {
        label: 'Find Agents',
        subLinks: ['Find estate agents'],
      },
      {
        label: 'Commercial',
        subLinks: [
          'Commercial property to rent',
          'Commercial property for sale',
        ],
      },
      {
        label: 'Inspire',
        subLinks: [
          'Moving stories',
          'Property blog',
          'Property guides',
          'Housing trends',
          'Overseas blog',
          'Country guides',
        ],
      },
      {
        label: 'Overseas',
        subLinks: [
          'All countries',
          'Spain',
          'France',
          'Portugal',
          'Italy',
          'Greece',
          'Currency',
          'Sell overseas property',
        ],
      },
    ],
    []
  )

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseY(event.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (mouseY > 210) {
      setIsHovered(false)
    }
  }, [mouseY])

  return (
    <div className=' fixed z-10 w-full bg-white'>
      <div className='h-[55px] border-b-[1.5px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0 max-w-[1180px] mx-auto w-full'>
            <Logo height={100} />
            {/* Navigation */}
            <NavButtons navConfig={navConfig} setIsHovered={setIsHovered} />
            {/* Sign in */}
            <Button
              setIsHovered={setIsHovered}
              icon={HiOutlineUser}
              className='duration-0 tracking-wide py-2 px-3 rounded-lg ring-[#00DEB6] ring-2 flex flex-row h-auto items-center gap-x-2 text-base font-medium cursor-pointer hover:bg-[#00DEB6] '
            >
              Sign in
            </Button>
          </div>
        </Container>
        {/* Sub Nav */}
        <AnimatePresence>{isHovered && <SubMenuBackdrop />}</AnimatePresence>

        <div></div>
      </div>
      {children}
    </div>
  )
}

export default Navbar
