import { Metadata } from 'next'

import { Footer, Header } from '@/components'
import { APP_METADATA } from '@/constants'
import { ILayout } from '@/types'
import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'

export const metadata: Metadata = APP_METADATA

export default async function RootLayout({ children }: ILayout) {
  return (
    <html lang="es"> 
      <body className={cn(getFontsVariables(), 'dark w-full overflow-x-hidden min-h-screen flex flex-col bg-background text-foreground')}>
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
