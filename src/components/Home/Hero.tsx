import { Button } from '@/ui/button'
import Link from 'next/link'

import { AnimatedLogo } from './animations/AnimatedLogo'
import { ScrollReveal } from './animations/ScrollReveal'

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 text-center relative">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10 rounded-3xl" />
      
      {/* Logo animado */}
      <div className="mb-8">
        <AnimatedLogo className="text-primary" />
      </div>
      
      {/* Título con animación */}
      <ScrollReveal>
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">
          Explora el Universo de <span className="text-primary">React</span>
        </h1>
      </ScrollReveal>
      
      {/* Subtítulo con animación */}
      <ScrollReveal delay={0.1}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Un espacio para aprender, descubrir y profundizar en el ecosistema de React con artículos, tutoriales y ejemplos prácticos.
        </p>
      </ScrollReveal>
      
      {/* Botones con animación */}
      <ScrollReveal delay={0.2} direction="up">
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="/articles">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Leer Artículos
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <Link href="/about">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Sobre Mí
            </Link>
          </Button>
        </div>
      </ScrollReveal>
      
      {/* Indicador de scroll */}
      <ScrollReveal delay={0.4} className="absolute bottom-8">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Descubre más</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down animate-bounce">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </ScrollReveal>
    </section>
  )
}
