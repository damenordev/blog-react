import { AnimatedLogo } from '@/components/common/AnimatedLogo'

export const PlaygroundEditorLoading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <AnimatedLogo className="text-primary size-32 mb-4" />
        <h3 className="text-2xl font-semibold text-foreground tracking-tight">Cargando Editor</h3>
        <div className="flex space-x-2">
          <div className="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]" />
          <div className="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]" />
          <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </div>
  )
}
