'use server'

import { authServerApp } from './server'

// export interface ISignInWithCredentialsArgs {
//   email: string
//   password: string
//   noRedirect?: boolean
// }

// export const signInWithCredentials = async (args: ISignInWithCredentialsArgs) => {
export const signInWithCredentials = async (formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')
  await authServerApp.signInWithCredential({ email: email as string, password: password as string })
}
