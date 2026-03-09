import * as React from 'react'
import { cn } from './utils'

export function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors',
        'bg-gray-900 text-white hover:bg-gray-800',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
