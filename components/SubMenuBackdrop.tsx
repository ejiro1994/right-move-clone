'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface SubMenuBackdropProps {}

const SubMenuBackdrop: React.FC<SubMenuBackdropProps> = ({}) => {
  return (
      <motion.div
        initial={{ height: 0 }} // Initial height
        animate={{ height: '160px' }} // Desired height
        exit={{ height: 0 }} // Height during exit
        className='mt-[1.5px] border-b-[1.5px] w-full z-[999] bg-gray-100'
      >
      </motion.div>
  )
}

export default SubMenuBackdrop
