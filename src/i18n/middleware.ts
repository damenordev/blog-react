import createMiddlewareNextIntl from 'next-intl/middleware'
import { routing } from './routing'

export const i18nMiddleware = createMiddlewareNextIntl(routing)
