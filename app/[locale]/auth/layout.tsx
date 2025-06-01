import { ILayout } from '@/types'

export default function AuthLayout({ children }: ILayout) {
  return <div className="flex items-center justify-center pt-60">{children}</div>
}
