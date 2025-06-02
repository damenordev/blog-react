import { AnimatedLogo } from '@/components/common'

export default async function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <AnimatedLogo className="text-primary size-40" />
      </div>
    </div>
  )
}
