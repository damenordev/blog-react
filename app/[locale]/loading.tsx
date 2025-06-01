import { getTranslations } from 'next-intl/server'

export default async function Loading() {
  const t = await getTranslations('Loading')
  // Puedes reemplazar esto con un esqueleto de carga personalizado o un spinner
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem',
        fontFamily: 'sans-serif',
      }}
    >
      <p>{t('text')}</p>
    </div>
  )
}
