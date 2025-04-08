'use client'

import { Loader2, Code, BrainCircuit } from 'lucide-react'

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center bg-background/80 p-8 rounded-xl backdrop-blur-sm shadow-sm border">
        <div className="relative mb-6">
          <BrainCircuit className="h-16 w-16 text-primary opacity-20 absolute -top-1 -left-1" />
          <Code className="h-16 w-16 text-primary" />
        </div>

        <div className="flex items-center gap-3 mb-2">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <h3 className="text-lg font-bold">Preparando el playground</h3>
        </div>

        <p className="text-muted-foreground text-center max-w-xs">Estamos cargando el editor y preparando todo para que puedas comenzar a programar</p>

        <div className="mt-6 w-48 h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  )
}
