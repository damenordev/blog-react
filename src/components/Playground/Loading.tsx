'use client'

import { Loader2 } from 'lucide-react'

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="mt-4 text-muted-foreground">Cargando el editor...</p>
    </div>
  )
}
