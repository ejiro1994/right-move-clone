'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
// import { FaRegUser } from 'react-icons/fa6'
import { HiOutlineUser } from 'react-icons/hi'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import NavLinks from './NavLinks'

type NavbarProps = {
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathname = usePathname()

  const navItems = useMemo(
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

  return (
    <div className='fixed w-full bg-white z-10 '>
      <div className='h-[55px] border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0 max-w-[1180px] mx-auto w-full'>
            <Logo height={100} />
            {/* menu items */}
            <NavLinks navItems={navItems} />
            <Button
              icon={HiOutlineUser}
              className='duration-0 tracking-wide py-2 px-3 rounded-lg ring-[#00DEB6] ring-2 flex flex-row h-auto items-center gap-x-2 text-base font-medium cursor-pointer hover:bg-[#00DEB6] '
            >
              Sign in
            </Button>
          </div>
        </Container>
        {/* subNav */}
        <div></div>
      </div>
      {children}
    </div>
  )
}

export default Navbar
