"use client"
import clsx from 'clsx'
import React from 'react'

interface MagicButtonProps {
  onClick?: () => void,
  icon?: React.ReactNode,
  title: string,
  position?: 'left' | 'right',
  otherClasses?: string
}

const MagicButton: React.FC<MagicButtonProps> = ({
  onClick = () => { },
  title,
  icon,
  position = 'left',
  otherClasses = ''
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BFA2F5_0%,#2D2E9F_50%,#BFA2F5_100%)]" />
      <span
        className={clsx(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium backdrop-blur-3xl gap-2",
          "bg-white text-slate-900",     
          "dark:bg-slate-950 dark:text-white", 
          otherClasses
        )}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton