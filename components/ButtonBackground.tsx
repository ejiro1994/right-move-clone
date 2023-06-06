'use client'
import {motion} from 'framer-motion'

type ButtonBackgroundProps = {
  
}

const ButtonBackground: React.FC<ButtonBackgroundProps> = ({  }) => {
  return (
    <motion.div className='bg-slate-100 rounded-md absolute  -left-3  -top-3 -right-3 -bottom-3  py-[10px] px-3 -z-10'
    layout
    layoutId='background'
    >
    </motion.div>
  )
}

export default ButtonBackground