import 'server-only'
import { StackServerApp } from '@stackframe/stack'
import { redirect } from 'next/navigation'

export const authServerApp = new StackServerApp({
  tokenStore: 'nextjs-cookie',
  urls: {
    // signIn: '/signin',
    // signUp: '/signup',
    // accountSettings: '/admin/account-settings',
    // afterSignIn: '/admin',
    // afterSignUp: '/admin',
    handler: '/auth',
  },
})

export const getAuthUser = () => authServerApp.getUser()

export const checkAuthAndRedirect = async (redirectTo = '/auth/signin') => {
  const auth = await getAuthUser()
  if (!auth) return redirect(redirectTo)
}
