'use client'
import {motion} from 'framer-motion'
import { useState } from 'react'
import Underline from './Underline'

type MenuItemProps = {
  item: {
    label: string;
    subLinks: string[];
}
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const[isBeingHovered,setIsBeingHovered] = useState(false)
  return (
    <motion.div
          className='cursor-pointer decoration-2 font-semibold py-2 px-3 hover:bg-slate-100 rounded-md relative'
          onHoverStart={() => {
            setIsBeingHovered(true)
          }}
          onHoverEnd={() => {
            setIsBeingHovered(false)
          }}
          key={item.label}
        >
            <span className='relative'>
          {item.label}
          {isBeingHovered && <Underline />}
          </span>
        </motion.div>
  )
}

export default MenuItem