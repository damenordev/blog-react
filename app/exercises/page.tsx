import { Suspense } from 'react'

import { Loading } from '@/components/Playground'
import PlaygroundClient from './client'

export default function PlaygroundEditorPage() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <PlaygroundClient />
      </Suspense>
    </main>
  )
}
