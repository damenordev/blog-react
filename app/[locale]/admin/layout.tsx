import { checkAuthAndRedirect } from '@/auth/server'
import { ILayout } from '@/types'

export default async function AdminLayout({ children }: ILayout) {
  await checkAuthAndRedirect()
  return <>{children}</>
}
