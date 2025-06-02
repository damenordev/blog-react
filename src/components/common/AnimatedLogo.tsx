'use client'
import { cn } from '@/styles'

interface IAnimatedLogoProps {
  className?: string
  size?: number
}

export const AnimatedLogo = ({ className = '', size = 120 }: IAnimatedLogoProps) => {
  return (
    <svg
      className={cn(`animate-spin-slow`, className)}
      width={size}
      height={size}
      viewBox="-11 -10 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2" fill="currentColor" className="animate-pulse-scale" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  )
}
