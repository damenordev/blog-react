import { ArrowRight, Code, Lightbulb, Play } from 'lucide-react'

import { Button } from '@/ui/button'
import Link from 'next/link'

export default function PlaygroundPage() {
  return (
    <div className="flex flex-col space-y-8 py-6 pt-20 container mx-auto">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Playground de React</h1>
        <p className="text-xl text-muted-foreground">Practica tus habilidades de React con ejercicios interactivos</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<Code className="h-10 w-10 text-primary" />}
          title="Editor de código"
          description="Escribe y edita código React con resaltado de sintaxis y autocompletado"
        />
        <FeatureCard
          icon={<Play className="h-10 w-10 text-primary" />}
          title="Vista previa en tiempo real"
          description="Visualiza los resultados de tu código instantáneamente mientras escribes"
        />
        <FeatureCard
          icon={<Lightbulb className="h-10 w-10 text-primary" />}
          title="Pistas y soluciones"
          description="Accede a pistas útiles y soluciones cuando necesites ayuda"
        />
      </div>

      <div className="space-y-4 bg-card border rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Cómo utilizar el playground</h2>
        <ol className="space-y-3 list-decimal pl-5">
          <li>Selecciona un ejercicio de la lista desplegable</li>
          <li>Lee la descripción del ejercicio para entender lo que debes implementar</li>
          <li>Escribe tu código en el editor</li>
          <li>Observa los resultados en tiempo real en la vista previa</li>
          <li>Si necesitas ayuda, consulta las pistas disponibles</li>
          <li>Puedes reiniciar el código o ver la solución en cualquier momento</li>
        </ol>
      </div>

      <div className="flex justify-center">
        <Button size="lg" className="gap-2" asChild>
          <Link href="/playground/editor">
            Comenzar a practicar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col space-y-3 bg-card border rounded-lg p-6">
      <div>{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
