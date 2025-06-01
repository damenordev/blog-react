import 'server-only'

import { StackServerApp } from '@stackframe/stack'

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
