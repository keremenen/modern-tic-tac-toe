import React from 'react'
import { cn } from '../lib/utils'

type ButtonProps = {
  color: 'mango' | 'turquoise' | 'gray'
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({
  children,
  className,
  color,
  variant = 'primary',
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-2xl py-3 font-bold text-navy transition-colors duration-100 ease-in-out',
        {
          'bg-mango-base shadow-[0_8px_#CC8B13] hover:bg-mango-light':
            color === 'mango',
          'bg-turquoise-base shadow-[0_8px_#118C87] hover:bg-turquoise-light':
            color === 'turquoise',
          'bg-gray shadow-[0_8px_#6B8997] hover:bg-white': color === 'gray',
          'aspect-square rounded-md shadow-[0_4px_#6B8997]':
            variant === 'secondary',
        },
        className,
      )}
    >
      {children}
    </button>
  )
}
