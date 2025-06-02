import { i18nLocales } from '@/i18n/routing'
import { cn, fonts } from '@/styles'
import { AppProvider } from '@/providers'
import { ILayoutWithLocale } from '@/types'

import '@/styles/globals.css'

export function generateStaticParams() {
  return i18nLocales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }: ILayoutWithLocale) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(fonts, 'relative min-h-screen w-full bg-background text-foreground overflow-x-hidden')}>
        <AppProvider locale={locale}>{children}</AppProvider>
      </body>
    </html>
  )
}
