'use client'
import {motion} from 'framer-motion'
import { useState } from 'react'
import ButtonBackground from './ButtonBackground'
import Underline from './Underline'

type MenuItemProps = {
  item: {
    label: string;
    subLinks: string[];
}
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const[isHovered,setIsHovered] = useState(false)
  return (
    <motion.div
          className='pointer cursor-pointer decoration-2 font-semibold py-2 px-3  rounded-md relative z-50'
          onHoverStart={() => {
            setIsHovered(true)
          }}
          onHoverEnd={() => {
            setIsHovered(false)
          }}
          key={item.label}
        >
            <span className='relative'>
          {item.label}
          {isHovered && <Underline />}
          {isHovered && <ButtonBackground />}
          </span>
        </motion.div>
  )
}

export default MenuItem 