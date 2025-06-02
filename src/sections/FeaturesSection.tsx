import { CodeXml, ClipboardCheck, BookOpenText, Puzzle, Sparkles } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/ui'

const features = [
  {
    Icon: CodeXml,
    name: 'Playground con IA',
    description: 'React en vivo con IA: optimiza y resuelve dudas al instante.',
    href: '/admin',
    cta: 'Probar Ahora',
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Playground con IA" />,
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: ClipboardCheck,
    name: 'Desafíos de React',
    description: 'Ejercicios React: valida habilidades y refuerza tu práctica.',
    href: '/ejercicios',
    cta: 'Resolver Desafíos',
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Desafíos de React" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: BookOpenText,
    name: 'Tutoriales Paso a Paso',
    description: 'Aprende React de básico a avanzado con guías prácticas.',
    href: '/tutoriales',
    cta: 'Explorar Guías',
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Tutoriales Paso a Paso" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
  },
  {
    Icon: Puzzle,
    name: 'Patrones y Componentes',
    description: 'Domina componentes y patrones de diseño efectivos.',
    href: '/blog',
    cta: 'Aprender Patrones',
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Patrones y Componentes" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: Sparkles,
    name: 'Asistente IA Dedicado',
    description: 'Tu IA para React: explicaciones, refactorización y respuestas.',
    href: '/admin',
    cta: 'Consultar IA',
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Asistente IA Dedicado" />,
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
]

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto max-w-5xl mt-40 px-4 md:px-0">
      <div className="text-center mb-12 md:mb-16">
        <span className="block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Explora React</span>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Características Esenciales</h3>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center">
          Descubre las funcionalidades que hacen de React una herramienta poderosa y cómo nuestra plataforma te ayuda a
          dominarlas.
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map(feature => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
