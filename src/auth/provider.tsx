import { StackProvider, StackTheme } from '@stackframe/stack'

import { authServerApp } from './server'

export interface IAuthProviderProps {
  children: React.ReactNode
  locale: string
}

const getLang = (locale: string) => {
  if (locale === 'es') return 'es-ES'
  if (locale === 'en') return 'en-US'
  return 'es-ES'
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children, locale }) => {
  return (
    <StackProvider app={authServerApp} lang={getLang(locale)}>
      <StackTheme>{children}</StackTheme>
    </StackProvider>
  )
}
