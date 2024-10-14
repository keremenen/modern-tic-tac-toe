import clsx from 'clsx'
import { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractFillClass(
  className: string | undefined,
): string | undefined {
  if (!className) return undefined

  const fillClass = className.split(' ').find((cls) => cls.startsWith('fill'))
  return fillClass
}
