import { Button } from '@/ui/button'

import { ScrollReveal } from './animations/ScrollReveal'

export const CTA = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <ScrollReveal>
        <div className="bg-primary/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para dominar <span className="text-primary">React</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Suscríbete a nuestro boletín para recibir los últimos artículos, tutoriales y recursos directamente en tu bandeja de entrada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button size="lg" className="h-12">
                Suscribirse
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No enviamos spam. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
