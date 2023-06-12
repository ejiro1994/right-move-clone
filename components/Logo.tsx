'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LogoProps {
  height: number
}

const Logo: React.FC<LogoProps> = ({ height }) => {
  const router = useRouter()
  return (
    <Image
      onClick={() => router.push('/')}
      className={`cursor-pointer flex items-center h-[${height}px]`}
      src='/images/logo.svg'
      height={120}
      width={120}
      alt='logo'
    />
  )
}

export default Logo
