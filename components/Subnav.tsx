'use client'
import { twMerge } from 'tailwind-merge'

type SubnavProps = {
  toggle: boolean
  mouseHover: React.Dispatch<React.SetStateAction<boolean>>
}

const Subnav: React.FC<SubnavProps> = ({ toggle, mouseHover }) => {
  return (
    <div
      onMouseLeave={() => {
        mouseHover(false)
      }}
      className={twMerge(
        `${toggle ? ' scale-y-150' : 'scale-y-0'}`,
        ' bg-red-800 w-full top-0 fixed z-0 transition duration-300'
      )}
    >
      {toggle}
    </div>
  )
}

export default Subnav
