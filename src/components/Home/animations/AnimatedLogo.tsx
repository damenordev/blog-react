'use client'

import { motion } from 'framer-motion'

interface AnimatedLogoProps {
  className?: string
  size?: number
}

export const AnimatedLogo = ({ className = '', size = 120 }: AnimatedLogoProps) => {
  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="-11 -10 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.circle
        cx="0"
        cy="0"
        r="2"
        fill="currentColor"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <motion.ellipse
          rx="10"
          ry="4.5"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0,
          }}
        />
        <motion.ellipse
          rx="10"
          ry="4.5"
          transform="rotate(60)"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.ellipse
          rx="10"
          ry="4.5"
          transform="rotate(120)"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </g>
    </motion.svg>
  )
}
