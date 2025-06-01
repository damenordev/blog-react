import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import { i18nLocales } from './routing'

export interface I18nProviderProps {
  children: React.ReactNode
  locale: string
}

export const I18nProvider: React.FC<I18nProviderProps> = async ({ children, locale }) => {
  if (!(i18nLocales as ReadonlyArray<string>).includes(locale)) notFound()

  let messages
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default
  } catch (error) {
    console.error(`Could not load messages for locale ${locale}:`, error)
    notFound()
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
