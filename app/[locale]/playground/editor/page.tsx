import { Suspense } from 'react'

import { PlaygroundClient } from './client'

export default function EditorPage() {
  return (
    <Suspense fallback={<h1>Loading editor...</h1>}>
      <PlaygroundClient />
    </Suspense>
  )
}
