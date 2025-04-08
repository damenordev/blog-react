import { ScrollReveal } from './animations/ScrollReveal'

const testimonials = [
  {
    quote: "React ha cambiado la forma en que construimos interfaces de usuario, permitiéndonos crear experiencias más ricas y mantenibles.",
    author: "Dan Abramov",
    role: "Creador de Redux y miembro del equipo de React",
  },
  {
    quote: "La composición de componentes en React es una de las ideas más poderosas en el desarrollo frontend moderno.",
    author: "Kent C. Dodds",
    role: "Educador y desarrollador de JavaScript",
  },
  {
    quote: "React Server Components representan el futuro de la web, combinando lo mejor del renderizado del servidor y del cliente.",
    author: "Guillermo Rauch",
    role: "CEO de Vercel y creador de Socket.io",
  },
  {
    quote: "React no es solo una biblioteca, es un ecosistema completo que ha transformado la forma en que pensamos sobre el desarrollo web.",
    author: "Sara Vieira",
    role: "Desarrolladora y conferenciante",
  },
]

export const Testimonials = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      {/* Título de sección */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen los Expertos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Opiniones de desarrolladores líderes en la industria sobre el impacto de React en el desarrollo web moderno.
        </p>
      </ScrollReveal>

      {/* Grid de testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal 
            key={index} 
            delay={index * 0.1} 
            direction={index % 2 === 0 ? 'left' : 'right'}
            className="bg-card border rounded-xl p-6 shadow-sm"
          >
            <div className="flex flex-col h-full">
              <svg 
                className="text-primary/20 mb-4" 
                width="45" 
                height="36" 
                viewBox="0 0 45 36" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 36H0V24C0 17.6348 1.8 12.4043 5.4 8.3086C9 4.2129 14.1 1.3965 20.7 0V7.2C17.1 8.1965 14.4 9.9609 12.6 12.4934C10.8 15.0258 9.9 17.6348 9.9 20.3203H13.5V36ZM37.8 36H24.3V24C24.3 17.6348 26.1 12.4043 29.7 8.3086C33.3 4.2129 38.4 1.3965 45 0V7.2C41.4 8.1965 38.7 9.9609 36.9 12.4934C35.1 15.0258 34.2 17.6348 34.2 20.3203H37.8V36Z" />
              </svg>
              
              <blockquote className="text-xl mb-6 flex-grow">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              
              <footer>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </footer>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
