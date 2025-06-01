import { AuthProvider } from '@/auth/provider'
import { I18nProvider } from '@/i18n/provider'
import { Toaster } from '@/ui'

export interface IAppProvider {
  children: React.ReactNode
  locale: string
}

export const AppProvider: React.FC<IAppProvider> = ({ children, locale }) => {
  return (
    <I18nProvider locale={locale}>
      <AuthProvider locale={locale}>
        <Toaster />
        {children}
      </AuthProvider>
    </I18nProvider>
  )
}
