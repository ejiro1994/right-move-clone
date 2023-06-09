'use client'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import Container from './Container'
import Logo from './Logo'
import NavButtons from './NavButtons'
import SubMenuBackdrop from './SubMenuBackdrop'
import { AnimatePresence } from 'framer-motion'
import SubMenu from './SubMenu'
import Link from 'next/link'
import Button from './Button'

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
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
      setIsNavOpen(false)
    }
  }, [mouseY])

  return (
    <nav className=' fixed z-10 w-full bg-white'>
      <div className='h-[55px] border-b-[1.5px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0 max-w-[1180px] mx-auto w-full'>
            <Logo height={100} />
            {/* Navigation */}
            <NavButtons
              navConfig={navConfig}
              setIsNavOpen={setIsNavOpen}
              isNavOpen={isNavOpen}
            />
            {/* Sign in */}
            <Button
              icon={HiOutlineUser}
              onMouseEnter={() => {
                setIsNavOpen(false)
              }}
            >
              Sign in
            </Button>
          </div>
        </Container>
        {/* Sub Nav */}
        <AnimatePresence>{isNavOpen && <SubMenuBackdrop />}</AnimatePresence>
        <SubMenu />
        <div></div>
      </div>
      {children}
    </nav>
  )
}

export default Navbar
