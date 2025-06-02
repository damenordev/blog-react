import { getTranslations } from 'next-intl/server'

import { checkAuthAndRedirect } from '@/auth/server'

export default async function ProtectedPage() {
  await checkAuthAndRedirect()
  const t = await getTranslations('ProtectedPage')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
