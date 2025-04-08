'use client'

import dynamic from 'next/dynamic'

import { Loading } from '@/components/Playground'

// Cargar el componente del playground dinámicamente para evitar problemas de SSR
const ExercisePlayground = dynamic(
  () => import('@/components/Playground').then(mod => ({ default: mod.ExercisePlayground })),
  { ssr: false, loading: () => <Loading /> }
)

export const PlaygroundClient = () => {
  return <ExercisePlayground />
}
