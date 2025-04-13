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
    // Asegura que main crezca y sea flex columnar
    <main className="container mx-auto flex-1 flex flex-col">
      {/* <Loading /> */}
      {/* Eliminamos el componente Welcome de aquí */}
      <Suspense fallback={<Loading />}>
        <PlaygroundClient />
      </Suspense>
    </main>
  )
}
