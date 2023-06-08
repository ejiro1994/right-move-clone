'use client'
import './before.css'
import { motion } from 'framer-motion'

type ActivePillProps = {}

const ActivePill: React.FC<ActivePillProps> = ({}) => {
  return (
    <>
      <motion.div
        layoutId='active-pill'
        className='  -left-3 -top-3 -right-3 -bottom-3  py-[10px] px-3 -z-[999] absolute  bg-slate-100 '
        style={{ borderRadius: 8 }}
        exit={{ transition: { delay: -10 } }}
      />
      <motion.div
        layoutId='underline'
        style={{ height: '2px', bottom: '-3px', left: '0px', right: '0px' }}
        className='absolute   bg-slate-800'
      />
      <motion.div
        className='pointer'
        initial={{
          y: 0,
          opacity: 0,
          rotate: 45,
        }}
        animate={{
          y: -10,
          opacity: 1,
        }}
        transition={{ duration: 0.1, delay: 0.2 }}
        exit={{
          y: -6,
          opacity: 0,
          transition: { duration: 0.1, delay: 0, easing: 'easeOut' },
        }}
      />
    </>
  )
}

export default ActivePill
