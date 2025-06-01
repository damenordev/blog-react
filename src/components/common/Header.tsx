import { getAuthUser } from '@/auth/server'
import { UserButton } from '@stackframe/stack'
import { Home } from 'lucide-react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { Button } from '@/ui'

import { SelectLanguage } from './SelectLanguage'

export const Header = async () => {
  const user = await getAuthUser()
  const t = await getTranslations('Header')

  return (
    <header className="flex items-center justify-between p-3 fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link className="cursor-pointer" href="/">
        <Home className="size-5" />
      </Link>

      <div className="flex items-center gap-2">
        <SelectLanguage />
        {user ? (
          <UserButton />
        ) : (
          <Button asChild>
            <Link className="text-nowrap cursor-pointer hover:underline" href="/auth/sign-in">
              {t('signIn')}
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}
