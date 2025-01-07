import { Metadata } from 'next'

import { APP_METADATA } from '@/constants'
import { ILayout } from '@/types'
import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'

export const metadata: Metadata = APP_METADATA

export default async function RootLayout({ children }: ILayout) {
  return (
    <html>
      <body className={cn(getFontsVariables(), 'dark w-full overflow-x-hidden h-screen bg-background text-foreground')}>{children}</body>
    </html>
  )
}
