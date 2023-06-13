'use client'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import Container from './Container'
import Logo from './Logo'
import NavButtons from './NavButtons'
import SubMenuBackdrop from './SubMenuBackdrop'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '../Button'
import debounce from 'lodash/debounce'



interface NavbarProps {
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [mouseY, setMouseY] = useState(0)
  const [isMouseMoving, setIsMouseMoving] = useState(false)

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
        subLinks: ['Property to rent', 'Student property to rent', 'Where can I live'],
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
    const handleMouseMove = debounce((event: MouseEvent) => {
      setMouseY(event.clientY)
      setIsMouseMoving(true)
    }, 10)

    const handleMouseStop = () => {
      setIsMouseMoving(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseStop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseStop)
    }
  }, [])

  useEffect(() => {
    if (mouseY > 210 && isMouseMoving) {
      setIsNavOpen(false)
    }
  }, [mouseY, isMouseMoving])

  return (
    <>
      <nav className=' fixed z-10 w-full bg-white' role='navigation'>
        <div className='h-[55px] border-b-[1.5px]'>
          <Container>
            <div
              className='
            flex
            flex-row
            items-center
            justify-between
            gap-3 
            md:gap-0
            max-w-[1180px] mx-auto w-full
            '
            >
              <Link href={'/'} className='w-[200px]'>
                <Logo height={250} />
              </Link>
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
          <AnimatePresence>
            {isNavOpen ? <SubMenuBackdrop /> : null}
          </AnimatePresence>
        </div>
        {children}
      </nav>
    </>
  )
}

export default Navbar
