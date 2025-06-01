'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui'
import { useRouter, usePathname, useLocale } from '@/i18n/navigation'
import { i18nLocales, i18nLocalesNames } from '@/i18n/routing'

export const LanguageSwitcher = () => {
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale })
  }
  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-full" size="sm">
        <SelectValue placeholder={i18nLocalesNames[currentLocale as keyof typeof i18nLocalesNames]} />
      </SelectTrigger>
      <SelectContent>
        {i18nLocales.map(lang => (
          <SelectItem className="cursor-pointer" key={lang} value={lang}>
            <span>{i18nLocalesNames[lang as keyof typeof i18nLocalesNames]}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
