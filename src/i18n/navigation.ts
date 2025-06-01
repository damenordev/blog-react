import { createNavigation } from 'next-intl/navigation'
import { useLocale as useLocaleNextIntl } from 'next-intl'

import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter, getPathname, permanentRedirect } = createNavigation(routing)

export const useLocale = () => useLocaleNextIntl()
