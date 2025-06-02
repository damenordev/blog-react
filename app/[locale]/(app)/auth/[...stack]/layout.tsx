import { ILayout } from '@/types'

export default function AuthLayout({ children }: ILayout) {
  return <div className="pt-48 flex items-center justify-center">{children}</div>
}
