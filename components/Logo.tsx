'use client'

import Image from 'next/image'

interface LogoProps {
  height: number
}

const Logo: React.FC<LogoProps> = ({height}) => {
  return (
    <Image
      alt='logo'
      className={`cursor-pointer flex items-center h-[${height}px]`}
      height={120}
      width={120}
      src='/images/logo.svg'
    />
  )
}

export default Logo
