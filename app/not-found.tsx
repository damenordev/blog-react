import Link from 'next/link'
import { Home } from 'lucide-react'

import { AnimatedLogo } from '@/components/common/AnimatedLogo'
import { cn, fonts } from '@/styles'
import '@/styles/globals.css'

export default function NotFound() {
  return (
    <html lang="en">
      <body className={cn(fonts, 'relative min-h-screen w-full bg-neutral-900 text-white overflow-x-hidden')}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-8xl font-bold text-primary">4</span>
              <AnimatedLogo className="text-primary size-20" />
              <span className="text-8xl font-bold text-primary">4</span>
            </div>
            <h1 className="text-5xl font-bold font-mono">Not Found</h1>
            <Link
              className="cursor-pointer border border-white/20 p-3 rounded-2xl flex items-center gap-2 hover:border-white/40 transition-colors"
              href="/"
              aria-label="Go home"
            >
              <Home className="size-6" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
