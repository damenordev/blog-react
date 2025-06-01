import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import { getAuthUser } from '@/auth/server'

export default async function ProtectedPage() {
  const auth = await getAuthUser()
  const t = await getTranslations('ProtectedPage')

  if (!auth) return redirect('/auth/signin')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
