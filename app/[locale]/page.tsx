import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function HomePage() {
  const t = await getTranslations('HomePage')
  return (
    <main className="flex flex-col items-center justify-center pt-40">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <Link className="text-blue-500 hover:underline" href="/protected">
        {t('protectedLink')}
      </Link>
    </main>
  )
}
