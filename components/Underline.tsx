'use client'
import { motion } from 'framer-motion'
    
type UnderlineProps = {}

const Underline: React.FC<UnderlineProps> = ({}) => {
  return (
    <motion.div
      className='  absolute -bottom-[3px] left-0 right-0 h-[2px] bg-slate-800 '
      layout
      layoutId='underline'
    ></motion.div>
  )
}

export default Underline
