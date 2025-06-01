'use client'
import { useTranslations } from 'next-intl'

import { useRouter, usePathname, useLocale } from '@/i18n/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui'
import { i18nLocales } from '@/i18n/routing'

export const SelectLanguage = () => {
  const t = useTranslations('SelectLanguage')
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale })
  }

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-full" size="sm">
        <SelectValue placeholder={t('selectPlaceholder')} />
      </SelectTrigger>
      <SelectContent>
        {i18nLocales.map(lang => (
          <SelectItem className="cursor-pointer" key={lang} value={lang}>
            <span>{t(`names.${lang}`)}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
