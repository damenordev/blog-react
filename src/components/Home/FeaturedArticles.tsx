import Link from 'next/link'
import { Button } from '@/ui/button'

import { AnimatedCard } from './animations/AnimatedCard'
import { ScrollReveal } from './animations/ScrollReveal'

// Datos de ejemplo para artículos destacados
const featuredArticles = [
  {
    id: 1,
    title: 'Introducción a React Server Components',
    excerpt: 'Descubre cómo los React Server Components están revolucionando el desarrollo frontend con renderizado en el servidor.',
    image: '/images/articles/server-components.webp',
    date: '2025-03-15',
    category: 'Arquitectura',
    slug: '/articles/introduccion-react-server-components',
  },
  {
    id: 2,
    title: 'Optimización de Rendimiento en React',
    excerpt: 'Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React y ofrecer una mejor experiencia de usuario.',
    image: '/images/articles/performance.webp',
    date: '2025-02-28',
    category: 'Rendimiento',
    slug: '/articles/optimizacion-rendimiento-react',
  },
  {
    id: 3,
    title: 'Patrones de Diseño en React',
    excerpt: 'Explora los patrones de diseño más utilizados en React y cómo implementarlos correctamente en tus proyectos.',
    image: '/images/articles/design-patterns.webp',
    date: '2025-01-20',
    category: 'Patrones',
    slug: '/articles/patrones-diseno-react',
  },
]

export const FeaturedArticles = () => {
  return (
    <section className="py-20 container mx-auto px-4 bg-muted/30">
      {/* Título de sección */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Artículos Destacados</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explora nuestros artículos más populares sobre React y aprende de las últimas tendencias y mejores prácticas.
        </p>
      </ScrollReveal>

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredArticles.map((article, index) => (
          <AnimatedCard key={article.id} delay={index * 0.1} className="overflow-hidden h-full">
            <Link href={article.slug} className="block h-full">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="absolute top-2 right-2 z-20 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </div>
                {/* Imagen de placeholder (en un proyecto real, estas imágenes existirían) */}
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col h-[calc(100%-12rem)]">
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{article.excerpt}</p>
                <div className="text-primary font-medium inline-flex items-center gap-1 mt-auto">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          </AnimatedCard>
        ))}
      </div>

      {/* Botón para ver más artículos */}
      <ScrollReveal className="flex justify-center">
        <Button asChild size="lg">
          <Link href="/articles" className="flex items-center gap-2">
            Ver Todos los Artículos
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </Button>
      </ScrollReveal>
    </section>
  )
}
