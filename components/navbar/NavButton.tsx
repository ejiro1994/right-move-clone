import { textToLink } from '@/utility/helpers'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, forwardRef, useImperativeHandle } from 'react'
import ActivePill from './ActivePill'

type NavButtonProps = {
  item?: {
    label: string
    subLinks: string[]
  }
  buttonConfig: {
    label: string
    subLinks: string[]
  }
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  isNavOpen: boolean
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  onHover?: (coordinates: DOMRect) => void
  navConfig: {
    label: string
    subLinks: string[]
  }[]
}

const NavButton = forwardRef<HTMLLIElement, NavButtonProps>(
  (
    {
      buttonConfig,
      activeTab,
      setActiveTab,
      isNavOpen,
      setIsNavOpen,
      onHover,
      navConfig,
      ...props
    },
    ref
  ) => {
    const [left, setLeft] = useState(0)
    const handleKeyPress = (event: React.KeyboardEvent<HTMLLIElement>) => {
      if (event.key === 'Enter') {
        if (isNavOpen) {
          setIsNavOpen(false)
        } else {
          setIsNavOpen(true)
        }
        setActiveTab(buttonConfig.label)
      }
    }

    const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
      setIsNavOpen(true)
      setActiveTab(buttonConfig.label)

      setLeft(event.currentTarget.getBoundingClientRect().left)

    }

    const lastTab = navConfig[navConfig.length - 1].label
    const secondLastTab = navConfig[navConfig.length - 2].label
    const thirdLastTab = navConfig[navConfig.length - 3].label

    console.log('secondLastTab', secondLastTab)

    const handleFocus = () => {
      setActiveTab(buttonConfig.label)
    }

    return (
      <>
        <motion.li
          tabIndex={0}
          onKeyDown={handleKeyPress}
          onMouseEnter={handleMouseEnter}
          onFocus={handleFocus}
          className='decoration-2 relative px-3 py-2 font-semibold rounded-md cursor-pointer'
          key={buttonConfig.label}
          ref={ref}
        >
          <span className='relative'>
            <span className='relative z-[999] whitespace-nowrap'>{buttonConfig.label}</span>
            {isNavOpen ? (
              <AnimatePresence>
                {activeTab === buttonConfig.label ? <ActivePill /> : null}
              </AnimatePresence>
            ) : null}
          </span>
        </motion.li>
        {/* sub Menu */}
        <AnimatePresence>
          {activeTab === buttonConfig.label && isNavOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className={`
             absolute
             gap-x-5
             gap-y-2
             mt-[60px]
             z-[999]
             flex
             flex-wrap
             flex-col
             h-[150px]
             
             ${
               [lastTab, secondLastTab, thirdLastTab].includes(activeTab)
                 ? '-translate-x-[40%] flex-wrap-reverse'
                 : null
             }
           `}
              style={{
                left: `${left}px`,
                // maxWidth: '9900px',
                minWidth: '100px',
                // maxWidth: '600px',
                // border: '1px solid red'
              }}
            >
              {/* left align here */}
              {buttonConfig.subLinks.map((link) => (
                <Link key={link} href={textToLink(link)}>
                  <p
                    className='rounded py-2 hover:underline hover:underline-offset-4 decoration-2 font-semibold '
                  >
                    {link}
                  </p>
                </Link>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>
    )
  }
)

NavButton.displayName = 'NavButton'

export default NavButton
