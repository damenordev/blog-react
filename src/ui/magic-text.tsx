'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export interface IMagicTextProps {
  text: string
}

interface IWordProps {
  children: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any
  range: number[]
}

const Word: React.FC<IWordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mt-[12px] mr-2 lg:mr-4 text-2xl md:text-4xl font-semibold">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}

export const MagicText: React.FC<IMagicTextProps> = ({ text }) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = text.split(' ')

  return (
    <p ref={container} className="flex flex-wrap leading-[0.5] p-4 justify-center">
      {words.map((word, i) => {
        const start = i / words.length

        const end = start + 1 / words.length

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
