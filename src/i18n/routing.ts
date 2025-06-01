import { defineRouting } from 'next-intl/routing'

export const i18nLocales = ['en', 'es'] as const
export const defaultLocale = 'en' as const

export const i18nLocalesNames = {
  en: 'English',
  es: 'Español',
}

export const routing = defineRouting({
  locales: i18nLocales,
  defaultLocale,
  localePrefix: 'never',
})
