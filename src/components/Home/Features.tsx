import { AnimatedCard } from './animations/AnimatedCard'
import { AnimatedCounter } from './animations/AnimatedCounter'
import { ScrollReveal } from './animations/ScrollReveal'

const features = [
  {
    title: 'Componentes Reutilizables',
    description: 'Construye interfaces de usuario modulares y reutilizables que facilitan el mantenimiento y la escalabilidad.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
        <path d="m22 12-8.6 3.91a2 2 0 0 1-1.66 0L3 12"/>
        <path d="m22 17-8.6 3.91a2 2 0 0 1-1.66 0L3 17"/>
      </svg>
    ),
  },
  {
    title: 'Virtual DOM',
    description: 'Mejora el rendimiento con un sistema que minimiza las operaciones en el DOM real, optimizando las actualizaciones.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <path d="M15 2v2"/>
        <path d="M15 20v2"/>
        <path d="M2 15h2"/>
        <path d="M2 9h2"/>
        <path d="M20 15h2"/>
        <path d="M20 9h2"/>
        <path d="M9 2v2"/>
        <path d="M9 20v2"/>
      </svg>
    ),
  },
  {
    title: 'Ecosistema Robusto',
    description: 'Accede a un vasto ecosistema de bibliotecas, herramientas y recursos que aceleran el desarrollo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle">
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.19-1.567a.639.639 0 0 0-.181-.523.658.658 0 0 0-.471-.195h-2.946a.66.66 0 0 0-.65.654v3.5c0 .173.069.338.191.46a.66.66 0 0 0 .474.185c.511-.02 1.025-.112 1.517-.274a.98.98 0 0 1 .926.276l1.583 1.584c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.568 1.568a1.236 1.236 0 0 1-.878.29c-.364-.055-.634-.306-.878-.55l-1.122-1.122a.98.98 0 0 1-.276-.926c.162-.492.254-1.006.275-1.517a.66.66 0 0 0-.185-.474.639.639 0 0 0-.46-.191h-3.5a.658.658 0 0 0-.47.195.639.639 0 0 0-.181.523l.191 1.567c.059.47-.272.88-.743.95a.98.98 0 0 1-.837-.276l-1.611-1.611a2.409 2.409 0 0 1-.706-1.704c0-.617.235-1.233.706-1.704l1.568-1.568a1.236 1.236 0 0 1 .878-.29c.364.055.634.306.878.55l1.122 1.122a.98.98 0 0 1 .276.926 6.99 6.99 0 0 1-.275 1.517.66.66 0 0 0 .645.665h3.5a.66.66 0 0 0 .65-.654v-2.946a.658.658 0 0 0-.195-.47.639.639 0 0 0-.523-.182l-1.567.191c-.47.059-.88-.272-.95-.743a.98.98 0 0 1 .276-.837l1.611-1.611a2.409 2.409 0 0 1 1.704-.706c.617 0 1.233.235 1.704.706l1.568 1.568c.23.23.556.338.878.29.488-.075.846-.504.846-.995v-2.764a2.409 2.409 0 0 0-.706-1.704l-.258-.258a1.236 1.236 0 0 0-.878-.29c-.364.055-.634.306-.878.55l-1.122 1.122a.98.98 0 0 0-.276.926c.162.492.254 1.006.275 1.517a.66.66 0 0 1-.645.665h-3.5a.66.66 0 0 1-.65-.654v-2.946a.658.658 0 0 1 .195-.47.639.639 0 0 1 .523-.182l1.567.191c.47.059.88-.272.95-.743a.98.98 0 0 0-.276-.837l-1.611-1.611a2.409 2.409 0 0 0-1.704-.706c-.617 0-1.233.235-1.704.706l-1.568 1.568a1.236 1.236 0 0 0-.289.878c.055.364.306.634.55.878l1.122 1.122a.98.98 0 0 0 .926.276c.492-.162 1.006-.254 1.517-.275a.66.66 0 0 1 .474.185.639.639 0 0 1 .191.46v3.5a.658.658 0 0 1-.195.47.639.639 0 0 1-.523.182l-1.567-.191c-.47-.059-.88.272-.95.743a.98.98 0 0 0 .276.837l1.611 1.611a2.409 2.409 0 0 0 1.704.706c.617 0 1.233-.235 1.704-.706l.258-.258a2.409 2.409 0 0 0 .706-1.704v-2.764c0-.49.358-.92.846-.995Z"/>
      </svg>
    ),
  },
  {
    title: 'Desarrollo Declarativo',
    description: 'Escribe código más predecible y fácil de depurar con un enfoque declarativo para construir interfaces.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: 'Comunidad Activa',
    description: 'Benefíciate de una comunidad global que contribuye constantemente con mejoras, tutoriales y soluciones.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Renderizado del Servidor',
    description: 'Mejora el SEO y el rendimiento con soporte para renderizado del lado del servidor (SSR) y generación estática.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
        <line x1="6" x2="6.01" y1="6" y2="6"/>
        <line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
  },
]

const stats = [
  { value: 200, suffix: 'K+', label: 'Paquetes NPM' },
  { value: 14, suffix: 'M+', label: 'Descargas Semanales' },
  { value: 10, suffix: '+', label: 'Años de Desarrollo' },
  { value: 190, suffix: 'K+', label: 'Estrellas en GitHub' },
]

export const Features = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      {/* Título de sección */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué <span className="text-primary">React</span>?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre las características que han convertido a React en la biblioteca más popular para construir interfaces de usuario modernas.
        </p>
      </ScrollReveal>

      {/* Grid de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <AnimatedCard key={feature.title} delay={index * 0.1}>
            <div className="flex flex-col h-full">
              <div className="mb-4 p-2 rounded-full bg-primary/10 w-fit text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Estadísticas */}
      <ScrollReveal>
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-10">React en Números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  duration={2 + index * 0.5}
                />
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
