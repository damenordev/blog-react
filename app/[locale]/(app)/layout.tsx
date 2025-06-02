import { ILayout } from '@/types'
import { AppHeader } from '@/components'

export default function AuthLayout({ children }: ILayout) {
  return (
    <div className="flex flex-col">
      <AppHeader />
      {children}
    </div>
  )
}
