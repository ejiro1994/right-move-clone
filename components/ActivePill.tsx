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
        className='bg-slate-800 absolute'
      />
      <motion.div
        className=' z-[700] block w-2.5 bg-[#f2f3f4] h-2.5 absolute -translate-x-2/4 -translate-y-full rotate-45 mt-[22px] border-l-[1.5px] border-l-[#e4e7eb] border-t-[1.5px] border-t-[#e4e7eb] border-solid left-2/4 top-full '
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
