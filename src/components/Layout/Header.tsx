'use client'

import * as React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Bell, HelpCircle, Home, LucideIcon, Settings, Shield } from 'lucide-react'

import { useOnClickOutside } from '@/hooks'
import { cn } from '@/styles'

interface Tab {
  title: string
  icon: LucideIcon
  type?: never
}

interface Separator {
  type: 'separator'
  title?: never
  icon?: never
}

type TabItem = Tab | Separator

const headerTabs: TabItem[] = [
  { title: 'Inicio', icon: Home },
  { title: 'Notificaciones', icon: Bell },
  { type: 'separator' },
  { title: 'Ajustes', icon: Settings },
  { title: 'Ayuda', icon: HelpCircle },
  { title: 'Seguridad', icon: Shield },
]

interface ExpandableTabsProps {
  tabs: TabItem[]
  className?: string
  activeColor?: string
  onChange?: (index: number | null) => void
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? '.5rem' : 0,
    paddingLeft: isSelected ? '1rem' : '.5rem',
    paddingRight: isSelected ? '1rem' : '.5rem',
  }),
}

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit: { width: 0, opacity: 0 },
}

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 }

function ExpandableTabs({ tabs, className, activeColor, onChange }: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null)
  const outsideClickRef = React.useRef<HTMLDivElement>(null)

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null)
    onChange?.(null)
  })

  const handleSelect = (index: number) => {
    setSelected(index)
    onChange?.(index)
  }

  const SeparatorComponent = () => <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />

  return (
    <div ref={outsideClickRef} className={cn('flex flex-wrap items-center gap-2 rounded-2xl border border-muted bg-background p-1 shadow-sm', className)}>
      {tabs.map((tab, index) => {
        if (tab.type === 'separator') {
          return <SeparatorComponent key={`separator-${index}`} />
        }

        const Icon = tab.icon
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              'relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300',
              selected === index ? cn('text-primary bg-primary/10', activeColor) : 'text-muted-foreground hover:bg-muted hover:text-muted-foreground'
            )}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span variants={spanVariants} initial="initial" animate="animate" exit="exit" transition={transition} className="overflow-hidden">
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )
      })}
    </div>
  )
}

export const Header = () => {
  const handleTabChange = (index: number | null) => {
    console.log('Selected tab index:', index)
  }

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform">
      <ExpandableTabs tabs={headerTabs} onChange={handleTabChange} />
    </header>
  )
}
