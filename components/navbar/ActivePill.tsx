'use client'
import { motion } from 'framer-motion'

type ActivePillProps = {}

const ActivePill: React.FC<ActivePillProps> = ({}) => {
  return (
    <>
      <motion.div
        layoutId='active-pill'
        className='
          -left-3
          -top-3
          -right-3
          -bottom-3 
          py-[10px]
          px-3
          -z-[701]
          absolute 
        bg-slate-100
        '
        style={{ borderRadius: 8 }}
      />
      <motion.div
        layoutId='underline'
        style={{ height: '2px', bottom: '-3px', left: '0px', right: '0px' }}
        className='bg-slate-800 absolute'
      />
      {/* pointer */}
      <motion.div
        className='
        absolute z-[700] w-2.5 h-2.5 mt-[10px] rotate-45 left-[50%] border-l-[1.5px] border-t-[1.5px] bg-[#f2f3f4] border-l-[#e4e7eb] border-t-[#e4e7eb]
          '
        initial={{
          opacity: 1,
          // rotate: 45,
          transform: 'translate(-50%, 10px) rotate(45deg)',
        }}
        animate={{
          opacity: 1,
          transform: 'translate(-50%, 0 ) rotate(45deg)',
          // rotate: 45,
        }}
        transition={{ duration: 0.1, delay: 0.2 }}
        exit={{
          y: -6,
          opacity: 0,
          transform: 'translate(-50%, 10px) rotate(45deg)',

          transition: { duration: 0.1, delay: 0, easing: 'easeOut' },
        }}
      />
    </>
  )
}

export default ActivePill
