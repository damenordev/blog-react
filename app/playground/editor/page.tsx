import { Metadata } from 'next'
import { Suspense } from 'react'

import { Loading } from '@/components/Playground'
import { PlaygroundClient } from './client'

export const metadata: Metadata = {
  title: 'Playground Editor | Practica tus habilidades',
  description: 'Practica tus habilidades de React con ejercicios interactivos en nuestro playground. Desde componentes básicos hasta hooks avanzados.',
}

// Renombrar esta página si es necesario para reflejar que es el editor
export default function PlaygroundEditorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Eliminamos el componente Welcome de aquí */}
      <Suspense fallback={<Loading />}>
        <PlaygroundClient />
      </Suspense>
    </div>
  )
}
