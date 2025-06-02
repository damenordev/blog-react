import { StackHandler } from '@stackframe/stack'

import { authServerApp } from '@/auth/server'

export default function Handler(props: unknown) {
  return <StackHandler fullPage={false} app={authServerApp} routeProps={props} />
}
