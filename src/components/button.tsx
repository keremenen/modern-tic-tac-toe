import React from 'react'
import { cn } from '../lib/utils'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(
        'hover:bg-back flex items-center justify-center rounded-2xl p-4 font-bold uppercase text-navy transition duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </button>
  )
}
