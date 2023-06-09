'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface SubMenuBackdropProps {}

const SubMenuBackdrop: React.FC<SubMenuBackdropProps> = ({}) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      transition={{ ease: 'linear', duration: '.2' }}
      animate={{ height: '160px' }}
      exit={{ height: 0 }}
      className='mt-[1.5px] border-b-[1.5px] w-full z-[999]
      bg-gray-100 absolute
      '
    />
  )
}

export default SubMenuBackdrop
