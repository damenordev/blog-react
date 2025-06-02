'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/ui/sheet'
import { cn } from '@/styles'
import { Button } from '@/ui/button'
import { Logo } from '@/components/common/Logo'

const menuItems = [
  { name: 'Playground IA', href: '/playground/editor' },
  { name: 'Ejercicios', href: '/ejercicios' },
  { name: 'Tutoriales', href: '/tutoriales' },
  { name: 'Blog', href: '/blog' },
]

export const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-background/50 max-w-4xl rounded-3xl border backdrop-blur-lg lg:px-3 lg:pl-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo className="size-8 text-primary" />
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-semibold">React</span>
                  <span className="text-xs text-muted-foreground -mt-2">damenordev</span>
                </div>
              </Link>

              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden -mr-2">
                    <Menu className="size-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader className="mb-6 text-left">
                    <SheetTitle>
                      <Link href="/" aria-label="home" className="flex items-center space-x-2">
                        <Logo className="size-8 text-primary" />
                        <div className="flex flex-col leading-none">
                          <span className="text-lg font-semibold">React</span>
                          <span className="text-xs text-muted-foreground -mt-2">damenordev</span>
                        </div>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 px-6">
                    <ul className="space-y-4 text-base">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                            onClick={() => setIsSheetOpen(false)}
                          >
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col space-y-3">
                      <Button asChild variant="outline" onClick={() => setIsSheetOpen(false)}>
                        <Link href="/auth/signin">
                          <span>Inicio Sesión</span>
                        </Link>
                      </Button>
                      <Button asChild onClick={() => setIsSheetOpen(false)}>
                        <Link href="/auth/signup">
                          <span>Registrarse</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn('hidden', isScrolled && 'lg:hidden', !isScrolled && 'lg:inline-flex')}
                >
                  <Link href="/auth/signin">
                    <span>Inicio Sesión</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn('hidden', isScrolled && 'lg:hidden', !isScrolled && 'lg:inline-flex')}
                >
                  <Link href="/auth/signup">
                    <span>Registrarse</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                  <Link href="/playground/editor">
                    <span>Comenzar a Aprender</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
