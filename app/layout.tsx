import { Metadata } from 'next'

import { Header } from '@/components'
import { APP_METADATA } from '@/constants'
import { ILayout } from '@/types'
import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'

export const metadata: Metadata = APP_METADATA

export default async function RootLayout({ children }: ILayout) {
  return (
    <html lang="es" className="h-full">
      {/* Asegura flex y altura completa en body */}
      <body className={cn(getFontsVariables(), 'dark w-full overflow-x-hidden min-h-screen flex flex-col bg-background text-foreground')}>
        {/* <Header /> */}
        {/* No necesita flex-1 aquí directamente si main lo tiene */}
        {children}
      </body>
    </html>
  )
}
