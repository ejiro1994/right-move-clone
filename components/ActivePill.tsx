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
      />
      <motion.div
        layoutId='underline'
        className='absolute -bottom-[3px] left-0 right-0 h-[2px] bg-slate-800'
      />
    </>
  )
}

export default ActivePill
