import { defineRouting } from 'next-intl/routing'

export const i18nLocales = ['en', 'es'] as const
export const defaultLocale = 'en' as const

export const routing = defineRouting({
  locales: i18nLocales,
  defaultLocale,
  localePrefix: 'never',
  // pathnames: {
  //   '/about': {
  //     en: '/about',
  //     es: '/acerca-de'
  //   }
  // }
})
